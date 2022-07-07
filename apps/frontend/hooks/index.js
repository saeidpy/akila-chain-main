import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useLoading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const handleStart = () => {
    setLoading(true);
  };
  const handleComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    if (loading) window.scrollTo(0, 0);
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      handleComplete();
    }, 2000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return loading;
};
