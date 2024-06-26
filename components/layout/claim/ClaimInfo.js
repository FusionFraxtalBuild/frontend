"use client";

import { ethers } from "ethers";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import config from "@/utils/config";
import { Ban, ChevronLeft, Info } from "lucide-react";
import { Button } from "@material-tailwind/react";
import useWallet from "@/hooks/useWallet";
import Step1 from "./claimInfo/Step1";
import Step2 from "./claimInfo/Step2";
import Step3 from "./claimInfo/Step3";
import useClaim from "@/hooks/useClaim";
import { useEffect, useState } from "react";
import { setStep } from "@/redux/slice/claimSlice";

export default function ClaimInfo() {
  const step = useSelector((state) => state.claim.step);
  const params = useParams();
  const id = params.id;
  const { getDomain } = useWallet();
  const domain = getDomain();
  const router = useRouter();
  const currentChain = useSelector((state) => state.chain.currentChain);
  const isBase = currentChain?.isBase;

  const isValid = config.find((chain) => chain.chainId === Number(id));

  return (
    <div className="flex flex-col items-center shadow-lg -mt-2 justify-center gap-3 bg-white p-8 py-5 font-outfit rounded-b-xl pb-7">
      {!isBase && (
        <>
          <div className="bg-gray-200 rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Ban size={70} className="m-auto" />
          </div>

          <p className="text-sm font-light">
            You can only claim domain on the base network.
          </p>

          <Button
            color="black"
            size="sm"
            className="rounded-lg font-outfit normal-case w-full py-3 mb-2 font-light flex items-center justify-center gap-x-2"
            onClick={() => {
              router.push(`/deploy?domain=${domain}`);
            }}
          >
            <ChevronLeft size={17} className="-ml-4" />
            Back to Deployments
          </Button>
        </>
      )}

      {!isValid && (
        <>
          <div className="bg-gray-200 rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Ban size={70} className="m-auto" />
          </div>

          <p className="text-sm font-light">
            This network is not supported for claiming
          </p>

          <Button
            color="black"
            size="sm"
            className="rounded-lg font-outfit normal-case w-full py-3 mb-2 font-light flex items-center justify-center gap-x-2"
            onClick={() => {
              router.push(`/deploy?domain=${domain}`);
            }}
          >
            <ChevronLeft size={17} className="-ml-4" />
            Back to Deployments
          </Button>
        </>
      )}

      {isValid && isBase && (
        <>
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
          {step === 2 && <Step3 />}
        </>
      )}
    </div>
  );
}
