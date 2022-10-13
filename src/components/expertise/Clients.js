export const clients = [
  {
    name: "Agilent Technologies, Inc",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/AgilentBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/AgilentGRIS.png",
  },
  {
    name: "Avaya",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/AvayaBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/AvayaGRIS.png",
  },
  {
    name: "BID",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/BidBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/BidGRIS.png",
  },
  {
    name: "Ericsson",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/EricssonBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/EricssonGRIS.png",
  },
  {
    name: "LivePerson",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/LivepersonBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/LivepersonGRIS.png",
  },
  {
    name: "NTT",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/NTTBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/NTTGRIS.png",
  },
  {
    name: "ORCI",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/OrciBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/OrciGRIS.png",
  },
  {
    name: "Pacifictech",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/PacifictechBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/PacifictechGRIS.png",
  },
  {
    name: "Rockwell Automation, Inc",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/RockwellBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/RockwellGRIS.png",
  },
  {
    name: "The Sage Group",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/SageBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/SageGRIS.png",
  },
  {
    name: "Sanford Guide",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/StandfordBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/StanfordGRIS.png",
  },
  {
    name: "The World Bank Group",
    image_white:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/WorldbankBLANCO.png",
    image_grey:
      "https://ushmultimedia.blob.core.windows.net/ushwebsite/WorldbankGRIS.png",
  },
];

export const group = (items, n) =>
  items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
