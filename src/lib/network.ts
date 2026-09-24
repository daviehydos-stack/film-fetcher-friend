import { useEffect, useState } from "react";

export type NetworkTier = "ultra" | "good" | "moderate" | "slow";
export interface NetworkStatus { tier: NetworkTier; saveData: boolean; effectiveType: string; downlink: number; isFast: boolean; }

function evaluateConnection(): NetworkStatus {
  if (typeof navigator === "undefined") return { tier: "good", saveData: false, effectiveType: "4g", downlink: 10, isFast: true };
  const conn=(navigator as any).connection||(navigator as any).mozConnection||(navigator as any).webkitConnection;
  if(!conn)return { tier:"good",saveData:false,effectiveType:"4g",downlink:10,isFast:true };
  const saveData=Boolean(conn.saveData),effectiveType=String(conn.effectiveType||"4g").toLowerCase(),downlink=typeof conn.downlink==="number"?conn.downlink:10;
  if(saveData||effectiveType.includes("2g")||downlink<1)return{tier:"slow",saveData,effectiveType,downlink,isFast:false};
  if(effectiveType==="3g"||downlink<2.5)return{tier:"moderate",saveData,effectiveType,downlink,isFast:false};
  if(downlink>=6)return{tier:"ultra",saveData,effectiveType,downlink,isFast:true};
  return{tier:"good",saveData,effectiveType,downlink,isFast:true};
}
export function useNetworkQuality():NetworkStatus{
  const[status,setStatus]=useState<NetworkStatus>(evaluateConnection);
  useEffect(()=>{if(typeof navigator==="undefined")return;const conn=(navigator as any).connection||(navigator as any).mozConnection||(navigator as any).webkitConnection;if(!conn?.addEventListener)return;const update=()=>setStatus(evaluateConnection());conn.addEventListener("change",update);return()=>conn.removeEventListener("change",update)},[]);
  return status;
}
export function getAdaptiveImageWidth(desiredWidth:number,tier:NetworkTier):number{
  if(tier==="slow")return Math.min(desiredWidth,360);
  if(tier==="moderate")return Math.min(desiredWidth,480);
  if(tier==="good")return Math.min(desiredWidth,720);
  return Math.min(desiredWidth,1080);
}
