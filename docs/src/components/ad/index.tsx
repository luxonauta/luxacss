"use client";

import "./index.css";
import { useEffect, useRef } from "react";

const Ad = () => {
  const reference = useRef<HTMLDivElement | null>(null);
  const isScriptAppended = useRef(false);

  useEffect(() => {
    if (reference.current && !isScriptAppended.current) {
      reference.current.innerHTML = "";
      const s = document.createElement("script");
      s.id = "_carbonads_js";
      s.src =
        "//cdn.carbonads.com/carbon.js?serve=CESDC2QL&placement=luxacsscom&format=cover";
      reference.current.appendChild(s);
      isScriptAppended.current = true;
    }
  }, []);

  return <div className="ad" ref={reference} />;
};

export default Ad;
