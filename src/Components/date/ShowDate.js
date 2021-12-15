import React from "react";

export default function ShowDate({ date }) {
  const dateOfPost = new Date(date);
  const today = new Date();
  let timelapse = (today - dateOfPost) / 60000;
  let displayString = "";
  if (timelapse < 10) {
    displayString = "few mintues ago";
  } else if (timelapse < 60) {
    displayString = `${Math.floor(timelapse)} minutes ago`;
  } else if (timelapse < 1440) {
    timelapse = timelapse / 60;
    displayString = `${Math.floor(timelapse)} hours ago`;
  } else if (timelapse < 10080) {
    timelapse = timelapse / 1440;
    displayString = `${Math.floor(timelapse)} days ago`;
  } else if (timelapse < 40320) {
    timelapse = timelapse / 10080;
    displayString = `${Math.floor(timelapse)} weeks ago`;
  } else if (timelapse < 483840) {
    timelapse = timelapse / 40320;
    displayString = `${Math.floor(timelapse)} months ago`;
  } else {
    timelapse = timelapse / 483840;
    displayString = `${Math.floor(timelapse)} years ago`;
  }

  return <>{displayString}</>;
}
