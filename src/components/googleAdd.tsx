import { useEffect, useState } from 'react';

interface IData {
  unitId: string;
}
export default function GoogleAdd(props: IData) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div>
      <h3 className="pb-4 mb-4 "> Adsense ads </h3>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1482811726476217"
        data-ad-slot={props.unitId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
}
