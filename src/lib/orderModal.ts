export type Platform = "UberEats" | "DoorDash" | null;
export type ModalStep = "platform" | "store";

export const locations = [
  {
    name: "Seaford",
    id: "seaford",
    doordashUrl:
      "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-seaford-39534831/91585950/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyBtaXRjaGFtIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InJpemluIHNtYXNoIGJ1cmdlciBtaXRjaGFtIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJTVE9SRV9SWCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTEwMDQ1LDRdfQ==&pickup=false",
    uberEatsUrl:
      "https://www.ubereats.com/au/store/rizins-smash-burgers-seaford/qE1o_MeIU2SingPFctXU0w?diningMode=DELIVERY&surfaceName=",
  },
  {
    name: "Mitcham",
    id: "mitcham",
    doordashUrl:
      "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-mitcham-33345535/83788161/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyBtaXRjaGFtIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InJpemluIHNtYXNoIGJ1cmdlciBtaXRjaGFtIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJTVE9SRV9SWCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTEwMDQ1LDRsMTAwMzMzXX0=&pickup=false",
    uberEatsUrl:
      "https://www.ubereats.com/au/store/rizins-smash-burgers-mitcham/mAdz1sKATnGEa6Xtm-k7rQ?diningMode=DELIVERY&ps=1&surfaceName=",
  },
  {
    name: "Dandenong",
    id: "dandenong",
    doordashUrl:
      "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-dandenong-24403281/17715024/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJyaXppbiBzbWFzaCBidXJnZXIiLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCIsInF1ZXJ5X2ludGVudCI6IlNUT1JFX1JYIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxMTAwNDUsNCwxMDAzMzMsMTkyXX0=&pickup=false",
    uberEatsUrl:
      "https://www.ubereats.com/au/store/rizins-smash-burgers/mHLbgdAZQruoFtIhFWAdHg?diningMode=DELIVERY&mod=storeDeliveryTime&modctx=%257B%2522entryPoint%2522%253A%2522store-auto-surface%2522%252C%2522encodedStoreUuid%2522%253A%2522mHLbgdAZQruoFtIhFWAdHg%2522%257D&ps=1&surfaceName=",
  },
  {
    name: "Frankston",
    id: "frankston",
    doordashUrl:
      "https://www.doordash.com/en-AU/store/rizin’s-smash-burgers-frankston-42292193/104211546/?preview=1",
    uberEatsUrl:
      "https://www.ubereats.com/store/rizins-smash-burgers-frankston/vzuG0_aQT_KakO4DmMl1rg?utm_source=menu-maker",
  },
];

export function getUrl(platform: Platform, locId: string): string {
  const location = locations.find((l) => l.id === locId);
  if (!location) return "#";
  if (platform === "UberEats") return location.uberEatsUrl;
  if (platform === "DoorDash") return location.doordashUrl;
  return "#";
}
