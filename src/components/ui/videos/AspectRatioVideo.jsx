import React from "react";
const _jsxFileName = "";





const AspectRatioVideo = ({
  videoUrl,
  aspectRatio = "video", // Default aspect ratio
  title = "Embedded Video",
}) => {
  return (
    React.createElement('div', { className: `aspect-${aspectRatio} overflow-hidden rounded-lg`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
      , React.createElement('iframe', {
        src: videoUrl,
        title: title,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"     ,
        allowFullScreen: true,
        className: "w-full h-full" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
)
    )
  );
};

export default AspectRatioVideo;
