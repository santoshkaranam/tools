import { useEffect, useState } from 'react';

export default function GoogleAdd() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <div>
        <h3 className="pb-4 mb-4 "> Adsense ads </h3>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1482811726476217"
          data-ad-slot="776****95"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </>
  );
}
