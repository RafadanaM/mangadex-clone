import React from "react";
import IconButton from "./IconButton";
import LeftArrowIcon from "@Images/icon/arrow-left.svg";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      className="mb-1 mr-4"
      onClick={() => router.back()}
      Icon={LeftArrowIcon}
      buttonType="menu"
      theme="light"
      hover
    />
  );
};

export default BackButton;
