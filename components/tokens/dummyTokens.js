const dummyTokens = [
  {
    chainId: 137,
    address: "0x5c59d7cb794471a9633391c4927ade06b8787a90",
    name: "Timeleap Finance",
    symbol: "TIME",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18854/thumb/timeleap.PNG?1633596238",
  },
  {
    chainId: 137,
    address: "0x7a5dc8a09c831251026302c93a778748dd48b4df",
    name: "PolyDEX",
    symbol: "PLX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28043/thumb/ZIPoL6gZ_400x400.jpeg?1667206092",
  },
  {
    chainId: 137,
    address: "0x9111d6446ac5b88a84cf06425c6286658368542f",
    name: "For Loot And Glory",
    symbol: "FLAG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20726/thumb/token_logo.ico?1637595445",
  },
  {
    chainId: 137,
    address: "0x48c97cf0a3837106cb58009d308df4dfabe441c7",
    name: "Verse",
    symbol: "VERSE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18946/thumb/verse_200.png?1634006367",
  },
  {
    chainId: 137,
    address: "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4",
    name: "Aave Polygon WMATIC",
    symbol: "AMWMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17267/thumb/amWMATIC_2x.png?1626967624",
  },
  {
    chainId: 137,
    address: "0x69cbc7449ee102eb792f1656744bf1a7c1bacb7e",
    name: "HawkDex",
    symbol: "HAWK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15149/thumb/hawk.jpg?1619924676",
  },
  {
    chainId: 137,
    address: "0xa353deb6fb81df3844d8bd614d33d040fdbb8188",
    name: "Idle Mystic",
    symbol: "MST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19624/thumb/vcAqmDN-_400x400.jpg?1635498385",
  },
  {
    chainId: 137,
    address: "0xaa404804ba583c025fa64c9a276a6127ceb355c6",
    name: "CIPHER",
    symbol: "CPR",
    decimals: 2,
    logoURI:
      "https://assets.coingecko.com/coins/images/22719/thumb/E-97BTDPNxk2PYsd8EwHzDbEpM6w-VoJc3t5DutqiPPydT57269nRUrxk8Pqig4CboNanb2Rd0MA8a0N9CGUmGG1jKdbzhy8pIwiDEGcPBP0mslchklUxO7BWSbDOv-ouncsR0aHjYGlG1hTWueUJOeqSLcVR90UKpCLhEWtJ6mS4o8_XQh57pEAEw_aiZmetQ9z0-rsla4JFo.jpg?1642485655",
  },
  {
    chainId: 137,
    address: "0x503836c8c3a453c57f58cc99b070f2e78ec14fc0",
    name: "SPORT",
    symbol: "SPORT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25823/thumb/SPORT_LOGO_PNG.png?1654057785",
  },
  {
    chainId: 137,
    address: "0x57d43cfe565a2e6c181662ae73a9f1ec6a830351",
    name: "RatAlert Gourmet Food",
    symbol: "GFOOD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25954/thumb/gfood.png?1654853755",
  },
  {
    chainId: 137,
    address: "0x2760e46d9bb43dafcbecaad1f64b93207f9f0ed7",
    name: "Metavault Trade",
    symbol: "MVX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25402/thumb/mvx.png?1660380728",
  },
  {
    chainId: 137,
    address: "0xa9cb489b3e59ca5f30b45c1ec2fc068ad6551686",
    name: "Metagon",
    symbol: "METAGON",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/23008/thumb/metagon.png?1643092533",
  },
  {
    chainId: 137,
    address: "0x613a489785c95afeb3b404cc41565ccff107b6e0",
    name: "RadioShack",
    symbol: "RADIO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25307/thumb/ZVoPiysPJq6dPIZm_Se-6vjmsBepwhHlTQfdYZRILbHyVVTRUYCO-wmJJ4zT10HXCGv1j-ZyWr2u2sBaVlap5Y-ILqeXZuIquWdBDxxG0E0qDpgH7omLqYdgWWLSM_TUK9d1PiiYdu6bERdCDaucgFjlqwmhVQK4uV4jyUiXzchVUnu8Qt6SnxlNxz88G0mQ_tfiwkFv_vKqtgb1CcPycVZVz9.jpg?1651211260",
  },
  {
    chainId: 137,
    address: "0x0102bbfddffbd8d28d3a1b9c47017f62f42768f2",
    name: "50Cent",
    symbol: "50C",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16431/thumb/50cents.png?1624271368",
  },
  {
    chainId: 137,
    address: "0xe20f7d1f0ec39c4d5db01f53554f2ef54c71f613",
    name: "Matic Aave Interest Bearing YFI",
    symbol: "MAYFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14078/thumb/maYFI.png?1614158792",
  },
  {
    chainId: 137,
    address: "0xe5417af564e4bfda1c483642db72007871397896",
    name: "Gains Network",
    symbol: "GNS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19737/thumb/logo.png?1635909203",
  },
  {
    chainId: 137,
    address: "0xe87ba1bd11ee6e0d3c7dd6932e6a038e38627f65",
    name: "aUSDC",
    symbol: "AUSDC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28332/thumb/CRYTOLOGO.png?1669532261",
  },
  {
    chainId: 137,
    address: "0x87e28bd5499e6846141a85659bc7f0cf815db11d",
    name: "Quantum Tech",
    symbol: "QUA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22465/thumb/Pm9J4C3KD-5W41f2VH2IIWUY3gRCNJqTyu7X4SQt0ptuUYnhm68zPVBxTEgehAE_WSZBSz_TzxLfAWu8P7a8zOSZa8MpuqUmntsWVeK01s7IoEBERumgQq1mcTuxyOQXBH68OZBkC_hqVEiSf4vNw_EgbtCSATx6XTaLUmCO33kTaolgB5CU33MiINZkwvRDsexAQnxT7BWO6F.jpg?1641883901",
  },
  {
    chainId: 137,
    address: "0x2b3ecb0991af0498ece9135bcd04013d7993110c",
    name: "Universal Basic Offset",
    symbol: "UBO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28075/thumb/C3_UBO_Gradient-01.png?1667393410",
  },
  {
    chainId: 137,
    address: "0xa6da8c8999c094432c77e7d318951d34019af24b",
    name: "tGOLD",
    symbol: "TXAU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27828/thumb/tGOLD_token_2D.jpg?1666165789",
  },
  {
    chainId: 137,
    address: "0x60e6895184448f3e8ef509d083e3cc3ac31f82fd",
    name: "KwikTrust",
    symbol: "KTX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24352/thumb/KwikTrustLogo.png?1647433638",
  },
  {
    chainId: 137,
    address: "0x29c28f7e50ea89343fe2b2c75f2652b883ed0cbd",
    name: "GemPay",
    symbol: "GPAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20766/thumb/200x200_%281%29.jpg?1637654513",
  },
  {
    chainId: 137,
    address: "0x3f374ed3c8e61a0d250f275609be2219005c021e",
    name: "Arcadium",
    symbol: "ARCADIUM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17717/thumb/4dyLxHe.png?1629085958",
  },
  {
    chainId: 137,
    address: "0xac63686230f64bdeaf086fe6764085453ab3023f",
    name: "Atlas USV",
    symbol: "USV",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22066/thumb/7iUyjg5t.png?1640744823",
  },
  {
    chainId: 137,
    address: "0x70784d8a360491562342b4f3d3d039aaacaf8f5d",
    name: "Simba Empire",
    symbol: "SIM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17712/thumb/Logo_Simba_200x200.png?1629083120",
  },
  {
    chainId: 137,
    address: "0xd7c8469c7ec40f853da5f651de81b45aed47e5ab",
    name: "Potcoin",
    symbol: "POT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/51/thumb/potcoin.png?1547033701",
  },
  {
    chainId: 137,
    address: "0x7c58d971a5dabd46bc85e81fdae87b511431452e",
    name: "EDGE Activity",
    symbol: "EAT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26268/thumb/dp_YT.jpg?1658838042",
  },
  {
    chainId: 137,
    address: "0x2721d859ee8d03599f628522d30f14d516502944",
    name: "RatAlert FastFood",
    symbol: "FFOOD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25690/thumb/ffood.png?1653375324",
  },
  {
    chainId: 137,
    address: "0x0527c8c43250279d6eb74da1078193f5316fc9a0",
    name: "PolyQuity Dollar",
    symbol: "PYD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18460/thumb/PYD200.png?1632108803",
  },
  {
    chainId: 137,
    address: "0x1af640ad5378144318fc7758f4c5546f6c435e88",
    name: "BUIDL Acadamey",
    symbol: "BDGV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28110/thumb/IMG_20221102_101102_540.jpg?1667545858",
  },
  {
    chainId: 137,
    address: "0xedcfb6984a3c70501baa8b7f5421ae795ecc1496",
    name: "ABCMETA",
    symbol: "META",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/27723/thumb/meta-gecko50.png?1668597397",
  },
  {
    chainId: 137,
    address: "0x04f177fcacf6fb4d2f95d41d7d3fee8e565ca1d0",
    name: "DragonMaster",
    symbol: "DMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25171/thumb/JNBofoc.png?1650524900",
  },
  {
    chainId: 137,
    address: "0x2a07461a493b994c2a32f549fd185524f306ab38",
    name: "Aree Shards",
    symbol: "AES",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27231/thumb/AES_TICKER_200.png?1662706815",
  },
  {
    chainId: 137,
    address: "0xff2382bd52efacef02cc895bcbfc4618608aa56f",
    name: "OneRare",
    symbol: "ORARE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19696/thumb/Thumbnail_-_500_px_-_Black.png?1635751681",
  },
  {
    chainId: 137,
    address: "0x87f654c4b347230c60cad8d7ea9cf0d7238bcc79",
    name: "Yamp Finance",
    symbol: "YAMP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17301/thumb/0x87f654c4b347230C60CAD8d7ea9cF0D7238bcc79.png?1627267863",
  },
  {
    chainId: 137,
    address: "0x9f64d1aacb129b844500119b50938c57aa9ad6e5",
    name: "SpaceShipX",
    symbol: "XSHARE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28004/thumb/CRYTOLOGO.png?1666929728",
  },
  {
    chainId: 137,
    address: "0x1132f58810ee9ff13e97aeccd8dda688cc5eb8f4",
    name: "SpaceRat",
    symbol: "SRAT",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/15970/thumb/logo_200.png?1622522829",
  },
  {
    chainId: 137,
    address: "0xe05fba9fb4796dedf2e81e6f85f11d0fd6f1ade0",
    name: " FOLK",
    symbol: "FOLK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25667/thumb/folk-cryptovoxels.png?1653288100",
  },
  {
    chainId: 137,
    address: "0x688b4231472fde70c1d30f48638aa1661725d3ce",
    name: "SendCrypto",
    symbol: "SENDC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28334/thumb/SC_Logo_200x200.png?1669546353",
  },
  {
    chainId: 137,
    address: "0xa0df47432d9d88bcc040e9ee66ddc7e17a882715",
    name: "Ripae pMATIC",
    symbol: "PMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26366/thumb/l5k8DuE3_400x400.png?1657604405",
  },
  {
    chainId: 137,
    address: "0x235737dbb56e8517391473f7c964db31fa6ef280",
    name: "Kasta",
    symbol: "KASTA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22293/thumb/Kasta_ShortIcon_Indigo_RGB.png?1642749961",
  },
  {
    chainId: 137,
    address: "0xfe1dfcce53bc2a7d93b4f02587db372a9b7a0172",
    name: "Blatform",
    symbol: "BFORM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26040/thumb/blatform3_32.png?1655364337",
  },
  {
    chainId: 137,
    address: "0xa25610a77077390a75ad9072a084c5fbc7d43a0d",
    name: "Monsoon Finance",
    symbol: "MCASH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18632/thumb/DdcZZeP_%282%29.png?1632716316",
  },
  {
    chainId: 137,
    address: "0xdf2140dee6b07ae495382bc1cd446f7b328f63e3",
    name: "Polygon BabyDoge",
    symbol: "POLYBABYDOGE",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/16937/thumb/WMpWi7ub4A1FUu8OZBMgBbn5gexHP0b0abL98yQz_rMdF4FWjwwQa7t4P8ktfWZMrJokFdH7MeYjOWqVf5qBsnInzL2CEl8jhgYS_Sxs0bLh07tUOWAMyYyGfae3EzadIBRSFHZ1P368gDOC7q6cLkNyJGMf2rgE_K2ZV7YWWPjT6bvLF9UX28h1Gup3BhtSOYzRCvaAUpUB.jpg?1627567492",
  },
  {
    chainId: 137,
    address: "0x28424507fefb6f7f8e9d3860f56504e4e5f5f390",
    name: "Aave Polygon WETH",
    symbol: "AMWETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17266/thumb/amWETH_2x.png?1626967258",
  },
  {
    chainId: 137,
    address: "0x300211def2a644b036a9bdd3e58159bb2074d388",
    name: "Crosschain IOTX",
    symbol: "CIOTX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18331/thumb/iotx.PNG?1631579018",
  },
  {
    chainId: 137,
    address: "0x4cd44ced63d9a6fef595f6ad3f7ced13fceac768",
    name: "tetuQi",
    symbol: "TETUQI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28314/thumb/tetuQi.png?1669357389",
  },
  {
    chainId: 137,
    address: "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
    name: "Aave Polygon USDC",
    symbol: "AMUSDC",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/17249/thumb/amUSDC_2x.png?1626941306",
  },
  {
    chainId: 137,
    address: "0xb5dfabd7ff7f83bab83995e72a52b97abb7bcf63",
    name: "Real USD",
    symbol: "USDR",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/27973/thumb/USDR-200x200.png?1666772134",
  },
  {
    chainId: 137,
    address: "0x3963a400b42377376d6c3d92ddf2d6288d8ee0d6",
    name: "Equals9",
    symbol: "EQ9",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28233/thumb/1648392274941.jpeg?1668574545",
  },
  {
    chainId: 137,
    address: "0x981aecc6eb4d382b96a02b75e931900705e95a31",
    name: "SAVAGE",
    symbol: "SAVG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22750/thumb/savg_logo.jpg?1642562253",
  },
  {
    chainId: 137,
    address: "0x6d969cea201e427d2875724fd4e8044833fbc7f4",
    name: "Polygon HBD",
    symbol: "PHBD",
    decimals: 3,
    logoURI:
      "https://assets.coingecko.com/coins/images/25142/thumb/image.png?1650434212",
  },
  {
    chainId: 137,
    address: "0x0e2a70c08e884ea76116fccdc8b8be559162f08e",
    name: "Cfoforum",
    symbol: "CFO",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/17592/thumb/CFO_logo_200_200px.png?1628580306",
  },
  {
    chainId: 137,
    address: "0x7cc15fef543f205bf21018f038f591c6bada941c",
    name: "PolyCub",
    symbol: "POLYCUB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24124/thumb/polycub.png?1646462759",
  },
  {
    chainId: 137,
    address: "0xfc541ec44a41974d76fc0b2f526cae781ffabaed",
    name: "Metabolic",
    symbol: "MTBC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23837/thumb/IMG-20211124-162844-449.png?1645516931",
  },
  {
    chainId: 137,
    address: "0xed0bb69f9f96e8c5fffdf16c468ecec385134ea5",
    name: "Starchi",
    symbol: "ELIXIR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18941/thumb/starchi.jpg?1633961292",
  },
  {
    chainId: 137,
    address: "0x9631be8566fc71d91970b10acfdee29f21da6c27",
    name: "Intelligent Monsters",
    symbol: "IMON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26077/thumb/imonToken.png?1655690407",
  },
  {
    chainId: 137,
    address: "0xe7a24ef0c5e95ffb0f6684b813a78f2a3ad7d171",
    name: "Curve fi amDAI amUSDC amUSDT",
    symbol: "AM3CRV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26740/thumb/W1sQNVWo_400x400.jpeg?1659953467",
  },
  {
    chainId: 137,
    address: "0x62a872d9977db171d9e213a5dc2b782e72ca0033",
    name: "NEUY",
    symbol: "NEUY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25870/thumb/logo200x200.png?1654240813",
  },
  {
    chainId: 137,
    address: "0x6e65ae5572df196fae40be2545ebc2a9a24eace9",
    name: "Shack",
    symbol: "SHACK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25699/thumb/shack_no_bg_no_pad3.png?1653441433",
  },
  {
    chainId: 137,
    address: "0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b",
    name: "BOB",
    symbol: "BOB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27266/thumb/Bob-logo.png?1663073030",
  },
  {
    chainId: 137,
    address: "0x4f6cbaca3151f7746273004fd7295933a9b70e69",
    name: "OmniWhirl",
    symbol: "WHIRL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17165/thumb/logo-200x.png?1626683241",
  },
  {
    chainId: 137,
    address: "0x9bd9ad490dd3a52f096d229af4483b94d63be618",
    name: "CelsiusX Wrapped DOGE",
    symbol: "CXDOGE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23683/thumb/R2747rb.png?1644997607",
  },
  {
    chainId: 137,
    address: "0x071ac29d569a47ebffb9e57517f855cb577dcc4c",
    name: "Galaxy Fight Club",
    symbol: "GCOIN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22364/thumb/M1oqSwPA_400x400.jpg?1641762383",
  },
  {
    chainId: 137,
    address: "0xb8bdb98af8c987336b9476fd8a98bdf190b6f10e",
    name: "LuckyMeta",
    symbol: "LMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26554/thumb/LMT.png?1658890729",
  },
  {
    chainId: 137,
    address: "0xed42605d2f2abd7dff808662a322a87804ef3a00",
    name: "Dogematic",
    symbol: "DM",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/18220/thumb/iIhpL4K.png?1631055291",
  },
  {
    chainId: 137,
    address: "0x1b43b97094aa3c6cc678edb9e28ac67daaa7cc64",
    name: "Liquid ICP",
    symbol: "LICP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21289/thumb/icp.PNG?1638868456",
  },
  {
    chainId: 137,
    address: "0x89c90e480a39fbe3886bb5bd53ba5b1acc69d4fb",
    name: "Aladdin cvxCRV",
    symbol: "ACRV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25395/thumb/Sv06cFHS_400x400.jpg?1651707422",
  },
  {
    chainId: 137,
    address: "0xd2ee3816c553e06dde44a7eed920e7f7b5a49230",
    name: "Doaibu",
    symbol: "DOA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24467/thumb/200x200_DOA_Original.png?1650436738",
  },
  {
    chainId: 137,
    address: "0xa3c322ad15218fbfaed26ba7f616249f7705d945",
    name: "GensoKishi Metaverse",
    symbol: "MV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23143/thumb/geno.png?1643626421",
  },
  {
    chainId: 137,
    address: "0x64060ab139feaae7f06ca4e63189d86adeb51691",
    name: "Unicorn Milk",
    symbol: "UNIM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23321/thumb/SVJI5-cerIpV4P1K3d_LeLKN3ZlE4eaazbnPEzrKhnU.png?1646707129",
  },
  {
    chainId: 137,
    address: "0xfa3c05c2023918a4324fde7163591fe6bebd1692",
    name: "Cresio",
    symbol: "XCRE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8032/thumb/logoXCRE.png?1644387161",
  },
  {
    chainId: 137,
    address: "0x2d027e55b85429e9f205930a8aff6d8e6c8c3021",
    name: "RAYS",
    symbol: "RAYS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26609/thumb/mch_rays_200.png?1659015796",
  },
  {
    chainId: 137,
    address: "0xb988bd378a0754957d5d9471c96e0f8051645a26",
    name: "iNFTspace",
    symbol: "INS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24681/thumb/4hTuPCCC_400x400.jpg?1648560503",
  },
  {
    chainId: 137,
    address: "0xc54884870f7a9c9ffb3541462e192d5eb1bbbb8c",
    name: "Carbonic Shares",
    symbol: "SCO2",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25976/thumb/SCO2.png?1655112461",
  },
  {
    chainId: 137,
    address: "0x728d06c26be85ebc8efa334453863b1df00ec493",
    name: "Cyber City",
    symbol: "CYBR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27985/thumb/Logo_Black.png?1666863227",
  },
  {
    chainId: 137,
    address: "0x79667854d97744d32b1ba5c51c25fbe791b424c8",
    name: "Omega Particle",
    symbol: "OMP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27731/thumb/OMP_%28200x200%29.png?1665560550",
  },
  {
    chainId: 137,
    address: "0xf239e69ce434c7fb408b05a0da416b14917d934e",
    name: "PolyShield",
    symbol: "SHI3LD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17641/thumb/QRE5xI0.png?1628741510",
  },
  {
    chainId: 137,
    address: "0x3f6b3595ecf70735d3f48d69b09c4e4506db3f47",
    name: "GameStation",
    symbol: "GAMER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19584/thumb/game_station.PNG?1635471603",
  },
  {
    chainId: 137,
    address: "0x5c2ed810328349100a66b82b78a1791b101c9d61",
    name: "Aave Polygon WBTC",
    symbol: "AMWBTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/17265/thumb/amWBTC_2x.png?1626966974",
  },
  {
    chainId: 137,
    address: "0x65ba64899c2c7dbfdb5130e42e2cc56de281c78b",
    name: "Dexioprotocol",
    symbol: "DEXI",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/27075/thumb/dexio-v2.png?1661691044",
  },
  {
    chainId: 137,
    address: "0x182db1252c39073eec9d743f13b5eeb80fde314e",
    name: "mKitty",
    symbol: "MKITTY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22180/thumb/kitty_matic.6e35abf7.png?1641178714",
  },
  {
    chainId: 137,
    address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    name: "MAI",
    symbol: "MIMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15264/thumb/mimatic-red.png?1620281018",
  },
  {
    chainId: 137,
    address: "0xd1f9c58e33933a993a3891f8acfe05a68e1afc05",
    name: "Sunflower Land",
    symbol: "SFL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25514/thumb/download.png?1652164203",
  },
  {
    chainId: 137,
    address: "0xa0e5c8b2b2e345c72f452880b2c164b944012907",
    name: "CUBIX",
    symbol: "CUBIX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28327/thumb/cubix.png?1669451388",
  },
  {
    chainId: 137,
    address: "0x7fc9e0aa043787bfad28e29632ada302c790ce33",
    name: "tetuBAL",
    symbol: "TETUBAL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27969/thumb/tetuBal.png?1667556746",
  },
  {
    chainId: 137,
    address: "0x8d43b5c7e3d7577bbf75b70c3880b99164a23634",
    name: "Trodl",
    symbol: "TRO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14713/thumb/KU_Ul7P5_400x400.jpg?1617921826",
  },
  {
    chainId: 137,
    address: "0x6e8a8726639d12935b3219892155520bdc57366b",
    name: "GNOME",
    symbol: "GNOME",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20885/thumb/gnome.png?1637829973",
  },
  {
    chainId: 137,
    address: "0x60d55f02a771d515e077c9c2403a1ef324885cec",
    name: "Aave Polygon USDT",
    symbol: "AMUSDT",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/17264/thumb/amUSDT_2x.png?1626966594",
  },
  {
    chainId: 137,
    address: "0xcf74ae52ae2c848387e6cd0048e1ec5a93ee2c66",
    name: "CBOMBER",
    symbol: "CBOMBER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27060/thumb/bomb_symbol200.png?1661656686",
  },
  {
    chainId: 137,
    address: "0xacbdc2b7a577299718309ed5c4b703fb5ed7af90",
    name: "Signed",
    symbol: "SIGN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24030/thumb/wjnKYes.png?1646115896",
  },
  {
    chainId: 137,
    address: "0x08e175a1eac9744a0f1ccaeb8f669af6a2bda3ce",
    name: "Energy8",
    symbol: "E8",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/19707/thumb/OZ52Oms.png?1652677165",
  },
  {
    chainId: 137,
    address: "0xd57f8b6f3e5d1e0ab85118f5e0dd893a08c43346",
    name: "Omnisea",
    symbol: "OSEA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26475/thumb/293837892_407994084681555_3167689470652146992_n.png?1658195766",
  },
  {
    chainId: 137,
    address: "0x4ac6e3cda66967f1286da690129a33638f9e7088",
    name: "PolyFarm EGG",
    symbol: "EGG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23512/thumb/polyfarm_egg.png?1644300527",
  },
  {
    chainId: 137,
    address: "0x42e5e06ef5b90fe15f853f59299fc96259209c5c",
    name: "Aavegotchi KEK",
    symbol: "KEK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24739/thumb/kek.png?1648769879",
  },
  {
    chainId: 137,
    address: "0x3d468ab2329f296e1b9d8476bb54dd77d8c2320f",
    name: "20WETH 80BAL",
    symbol: "20WETH-80BAL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28005/thumb/0x3d468ab2329f296e1b9d8476bb54dd77d8c2320f.png?1666937655",
  },
  {
    chainId: 137,
    address: "0xc56d17dd519e5eb43a19c9759b5d5372115220bd",
    name: "Polywolf",
    symbol: "MOON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16034/thumb/moon-black.png?1622675193",
  },
  {
    chainId: 137,
    address: "0xd3f07ea86ddf7baebefd49731d7bbd207fedc53b",
    name: "Polly DeFi Nest",
    symbol: "NDEFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18317/thumb/nDEFI.png?1631516554",
  },
  {
    chainId: 137,
    address: "0xcc1b9517460d8ae86fe576f614d091fca65a28fc",
    name: "Vigorus",
    symbol: "VIS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21245/thumb/VIS.PNG?1638768736",
  },
  {
    chainId: 137,
    address: "0x74ba6a10978f643a84c0b37fcb599081079811cb",
    name: "Diabolo",
    symbol: "DCASH",
    decimals: 10,
    logoURI:
      "https://assets.coingecko.com/coins/images/25926/thumb/diabolo-logo.png?1654673914",
  },
  {
    chainId: 137,
    address: "0xcfe2cf35d2bdde84967e67d00ad74237e234ce59",
    name: "PolyPup",
    symbol: "PUP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16420/thumb/2_%288%29.png?1623983944",
  },
  {
    chainId: 137,
    address: "0x27f8d03b3a2196956ed754badc28d73be8830a6e",
    name: "Aave Polygon DAI",
    symbol: "AMDAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17251/thumb/amDAI_2x.png?1626942084",
  },
  {
    chainId: 137,
    address: "0x4455ef8b4b4a007a93daa12de63a47eeac700d9d",
    name: "Forest Knight",
    symbol: "KNIGHT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18441/thumb/Coin_Forest_Knight_200x200.png?1632480031",
  },
  {
    chainId: 137,
    address: "0x0e2c818fea38e7df50410f772b7d59af20589a62",
    name: "Dominium",
    symbol: "DOM",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/24506/thumb/DOM-Token-Icon-200-200-px.png?1647883646",
  },
  {
    chainId: 137,
    address: "0xce899f26928a2b21c6a2fddd393ef37c61dba918",
    name: "Museum of Crypto Art",
    symbol: "MOCA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15829/thumb/photo_2021-06-04_09.36.16.jpeg?1622770606",
  },
  {
    chainId: 137,
    address: "0x8f9e8e833a69aa467e42c46cca640da84dd4585f",
    name: "NFT Champions",
    symbol: "CHAMP",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/19536/thumb/champ.png?1635905981",
  },
  {
    chainId: 137,
    address: "0x456320e9b87a7c84a53b8ab300067f3a29aab301",
    name: "Polygon Hive",
    symbol: "PHIVE",
    decimals: 3,
    logoURI:
      "https://assets.coingecko.com/coins/images/25495/thumb/Hive_Logo__200x200_.jpg?1652176902",
  },
  {
    chainId: 137,
    address: "0x67eb41a14c0fe5cd701fc9d5a3d6597a72f641a6",
    name: "Giddy",
    symbol: "GDDY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24960/thumb/gddy.png?1649573862",
  },
  {
    chainId: 137,
    address: "0x64875aaa68d1d5521666c67d692ee0b926b08b2f",
    name: "CelsiusX Wrapped ADA",
    symbol: "CXADA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23536/thumb/cxADA_128x128.png?1644388456",
  },
  {
    chainId: 137,
    address: "0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7",
    name: "Abachi",
    symbol: "ABI",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22331/thumb/abachi.PNG?1641514867",
  },
  {
    chainId: 137,
    address: "0x21fdb8e43d84420afbd6351d645f50c9138daae0",
    name: "EcoCREDIT",
    symbol: "ECO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23363/thumb/Eco-CREDIT-Logo.png?1643947272",
  },
  {
    chainId: 137,
    address: "0x1b7805e2829fd7d194dcc3078a4199b13c77e467",
    name: "AuraSwap",
    symbol: "AURA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26130/thumb/200x200_Token_transparent_for_coingecko.png?1655964506",
  },
  {
    chainId: 137,
    address: "0xd60deba014459f07bbcc077a5b817f31dafd5229",
    name: "Croatian FF Fan Token",
    symbol: "VATRENI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28295/thumb/Vatreni.png?1669792199",
  },
  {
    chainId: 137,
    address: "0xd5d84e75f48e75f01fb2eb6dfd8ea148ee3d0feb",
    name: "PGOV",
    symbol: "PGOV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16437/thumb/pgov.png?1624151483",
  },
  {
    chainId: 137,
    address: "0xf4b8888427b00d7caf21654408b7cba2ecf4ebd9",
    name: "Matic Aave interest bearing TUSD",
    symbol: "MATUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14083/thumb/maTUSD.png?1614165205",
  },
  {
    chainId: 137,
    address: "0x33cc3b1852939ef8cfd77bb5c3707cf2d3e72490",
    name: "RatAlert Casual FOOD",
    symbol: "CFOOD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25955/thumb/cfood.png?1654853782",
  },
  {
    chainId: 137,
    address: "0x40038c83e459937a988b669f1159cc78d8fdad68",
    name: "pQBERT",
    symbol: "PQBERT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19223/thumb/pqbert.jpeg?1634712069",
  },
  {
    chainId: 137,
    address: "0xb3bc8dae5a49ed956b5d2207d9040c816c56398f",
    name: "Robinos",
    symbol: "RBN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18864/thumb/1vZaRdJ__400x400.png?1633643012",
  },
  {
    chainId: 137,
    address: "0x486ffaf06a681bf22b5209e9ffce722662a60e8c",
    name: "Flycoin FLY",
    symbol: "FLY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26596/thumb/flatArtboard_20tfr.png?1658974032",
  },
  {
    chainId: 137,
    address: "0x20d3922b4a1a8560e1ac99fba4fade0c849e2142",
    name: "Matic Aave Interest Bearing WETH",
    symbol: "MAWETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14081/thumb/maWETH.png?1614164372",
  },
  {
    chainId: 137,
    address: "0xd45579de96a574efac915e6718604ff481bfa47f",
    name: "Prosperity Gold",
    symbol: "PRGD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26664/thumb/PRGD-Icon-001_%281%29.png?1659498830",
  },
  {
    chainId: 137,
    address: "0x752dc265eaf6da2db0f8e4a32d5596d3f18e8701",
    name: "Wrapped Avian",
    symbol: "WAVN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26238/thumb/raven.png?1656904300",
  },
  {
    chainId: 137,
    address: "0xab72ee159ff70b64beecbbb0fbbe58b372391c54",
    name: "SafeDollar Shares",
    symbol: "SDS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16867/thumb/1_551bIKFiNCvKXdUloML0wA.png?1625474832",
  },
  {
    chainId: 137,
    address: "0x4c392822d4be8494b798cea17b43d48b2308109c",
    name: "Polly Finance",
    symbol: "POLLY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18354/thumb/POLLY.png?1631604593",
  },
  {
    chainId: 137,
    address: "0xf6d5d14c5684fa5853a3be6d217cad19c6ab2164",
    name: "xMATIC",
    symbol: "XMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28333/thumb/XMATIC.png?1669546194",
  },
  {
    chainId: 137,
    address: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
    name: "Polycat Finance",
    symbol: "FISH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15226/thumb/smallLogo.png?1620269393",
  },
  {
    chainId: 137,
    address: "0x6c997a37f5a1dca62b58eeb01041f056942966b3",
    name: "Phenix Finance  Polygon ",
    symbol: "PHNX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28292/thumb/ksxEcZFc_400x400.jpg?1669372422",
  },
  {
    chainId: 137,
    address: "0x0b68782eff3177f1f9240b64a7e2f8e0497e2454",
    name: "Atlantis Loans Polygon",
    symbol: "ATLX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22178/thumb/atlx-200x200.png?1641178382",
  },
  {
    chainId: 137,
    address: "0x10b1c123183e191e8e2d5b209323de51c655e384",
    name: "Fast Food Wolf Game",
    symbol: "FFWOOL",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22142/thumb/ffwg-logo-200res.png?1640928500",
  },
  {
    chainId: 137,
    address: "0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a",
    name: "Luxy",
    symbol: "LUXY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21153/thumb/QmbYvptvVWHjAHR3tm2UpsXABcp4sQGzhCKMmc5pgn411R.png?1638412110",
  },
  {
    chainId: 137,
    address: "0x4438da4ef8e791a9964d27742676e6a70beb2514",
    name: "Tokenplay",
    symbol: "TOP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17687/thumb/tokenplay.PNG?1628846988",
  },
  {
    chainId: 137,
    address: "0x98ea609569bd25119707451ef982b90e3eb719cd",
    name: "Matic Aave Interest Bearing LINK",
    symbol: "MALINK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14082/thumb/maLINK.png?1614164913",
  },
  {
    chainId: 137,
    address: "0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539",
    name: "Adamant",
    symbol: "ADDY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15225/thumb/adamant.png?1620136256",
  },
  {
    chainId: 137,
    address: "0x8f006d1e1d9dc6c98996f50a4c810f17a47fbf19",
    name: "Pleasure Coin",
    symbol: "NSFW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15315/thumb/pleasurecoin-icon.png?1648724879",
  },
  {
    chainId: 137,
    address: "0xfb32513135e3267995268e3099d2b6114d20b6ed",
    name: "Coinerr",
    symbol: "ERR",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/24031/thumb/ERR-logo.png?1646116183",
  },
  {
    chainId: 137,
    address: "0x57fcbd6503c8be3b1abad191bc7799ef414a5b31",
    name: "tSILVER",
    symbol: "TXAG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27829/thumb/tSILVER_token_2D.jpg?1666165851",
  },
  {
    chainId: 137,
    address: "0x4c16f69302ccb511c5fac682c7626b9ef0dc126a",
    name: "Pancake Bunny Polygon",
    symbol: "POLYBUNNY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16855/thumb/token-bunny.a8b61846.png?1625455221",
  },
  {
    chainId: 137,
    address: "0x2ad20cdc0e722aac2772cb02d46a01a858899358",
    name: "Tierra Meta",
    symbol: "TRMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25127/thumb/tierrameta_logo-8.png?1650372911",
  },
  {
    chainId: 137,
    address: "0x6acda5e7eb1117733dc7cb6158fc67f226b32022",
    name: "Carb0n fi",
    symbol: "ZRO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23378/thumb/Signet_Zoom_200px_Transparent.png?1643961561",
  },
  {
    chainId: 137,
    address: "0xb832b1c86c79fa560ee817001f7b7ada1f0cdc85",
    name: "GO2E OTM",
    symbol: "OTM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28112/thumb/logo_OTM_200x200.png?1667549057",
  },
  {
    chainId: 137,
    address: "0x9719d867a500ef117cc201206b8ab51e794d3f82",
    name: "Matic Aave Interest Bearing USDC",
    symbol: "MAUSDC",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/14074/thumb/maUSDC.png?1614156225",
  },
  {
    chainId: 137,
    address: "0x1599fe55cda767b1f631ee7d414b41f5d6de393d",
    name: "Cool Cats Milk",
    symbol: "MILK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23340/thumb/milk_logo.jpg?1643890548",
  },
  {
    chainId: 137,
    address: "0x16dfb898cf7029303c2376031392cb9bac450f94",
    name: "Dragoma",
    symbol: "DMA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26244/thumb/DMA.png?1656920073",
  },
  {
    chainId: 137,
    address: "0x92a9c92c215092720c731c96d4ff508c831a714f",
    name: "Rail Polygon",
    symbol: "RAILPOLY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25595/thumb/logo_512px.png?1652772731",
  },
  {
    chainId: 137,
    address: "0x2b3b16826719bf0b494c8ddebaa5e882093ee37e",
    name: "FibSwap DEX",
    symbol: "FIBO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17306/thumb/coingeckofile.png?1655195281",
  },
  {
    chainId: 137,
    address: "0xa12566dd315b1419e7b9f5f4e5559a7e7e48db22",
    name: "Mint Marble",
    symbol: "MIM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26170/thumb/mim.png?1661689463",
  },
  {
    chainId: 137,
    address: "0x80244c2441779361f35803b8c711c6c8fc6054a3",
    name: "BoneSwap",
    symbol: "BONE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17126/thumb/logo_-_2021-07-16T103422.157.png?1626402887",
  },
  {
    chainId: 137,
    address: "0x04d80cdf20285d5ac590bbad97c887b9c6781774",
    name: "Galaxy Arena Metaverse",
    symbol: "ESNC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27923/thumb/esnc.png?1666606196",
  },
  {
    chainId: 137,
    address: "0x3f4203223440348344d730fbba18797f55dca628",
    name: "PRAY TOKEN",
    symbol: "PRAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26521/thumb/d0RD3_4W_400x400.png?1658455932",
  },
  {
    chainId: 137,
    address: "0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360",
    name: "Aave Polygon AAVE",
    symbol: "AMAAVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17239/thumb/amAAVE_2x.png?1626940769",
  },
  {
    chainId: 137,
    address: "0xec6c6f7e666d8a3fa0fd612b97d6a6d9e7d1e3f3",
    name: "Space Rebase",
    symbol: "SPACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28103/thumb/CRYTOLOGO.png?1667540377",
  },
  {
    chainId: 137,
    address: "0xb2c63830d4478cb331142fac075a39671a5541dc",
    name: "Bombcrypto Coin",
    symbol: "BOMB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26399/thumb/Bombcrypto_Coin.png?1657797692",
  },
  {
    chainId: 137,
    address: "0xf46cb10e8c5fb9368bbf497a3176b80c0af66d44",
    name: "Vortex Protocol",
    symbol: "VP",
    decimals: 11,
    logoURI:
      "https://assets.coingecko.com/coins/images/28122/thumb/vp.png?1667636113",
  },
  {
    chainId: 137,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    name: "Qi Dao",
    symbol: "QI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15329/thumb/qi.png?1620540969",
  },
  {
    chainId: 137,
    address: "0x5dd175a4242afe19e5c1051d8cd13fc8979f2329",
    name: "Reverse",
    symbol: "RVRS",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/18109/thumb/AezG5si_%281%29.png?1632900542",
  },
  {
    chainId: 137,
    address: "0x0b6afe834dab840335f87d99b45c2a4bd81a93c7",
    name: "Polylauncher",
    symbol: "ANGEL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17739/thumb/Polylauncher_-_200_x_200.png?1629121147",
  },
  {
    chainId: 137,
    address: "0x3c5a5885f6ee4acc2597069fe3c19f49c6efba96",
    name: "Krida Fans",
    symbol: "KRIDA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23104/thumb/bIdz6haF_400x400.jpg?1643233205",
  },
  {
    chainId: 137,
    address: "0xae204ee82e60829a5850fe291c10bf657af1cf02",
    name: "Aqar Chain",
    symbol: "AQR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22632/thumb/Xvl0W-30_400x400.jpg?1642343620",
  },
  {
    chainId: 137,
    address: "0x930a7dc10ae084fbbddc6537d7df7d4c65a40944",
    name: "UNLOCK",
    symbol: "UNLOCK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23646/thumb/unlock.png?1644910855",
  },
  {
    chainId: 137,
    address: "0xbc5b59ea1b6f8da8258615ee38d40e999ec5d74f",
    name: "Paw V2",
    symbol: "PAW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22836/thumb/v9uvwsJ.png?1642727101",
  },
  {
    chainId: 137,
    address: "0x130ce4e4f76c2265f94a961d70618562de0bb8d2",
    name: "Inverse BTC Flexible Leverage Index",
    symbol: "IBTC-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24177/thumb/iBTC-FLI-P_pulse_red.png?1646749712",
  },
  {
    chainId: 137,
    address: "0xfd195a17e2a60d248a7148a919c5166ae907479a",
    name: "KOLNET",
    symbol: "KOLNET",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26064/thumb/Icon_color2.png?1655464393",
  },
  {
    chainId: 137,
    address: "0x883abe4168705d2e5da925d28538b7a6aa9d8419",
    name: "Ball",
    symbol: "BALL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17557/thumb/2_%289%29.png?1628228675",
  },
  {
    chainId: 137,
    address: "0xd016caae879c42cb0d74bb1a265021bf980a7e96",
    name: "pSPACE",
    symbol: "PSPACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16984/thumb/space_token_2.png?1625908642",
  },
  {
    chainId: 137,
    address: "0x6002410dda2fb88b4d0dc3c1d562f7761191ea80",
    name: "The Employment Commons Work",
    symbol: "WORK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18546/thumb/mXSw8Qw.png?1632362691",
  },
  {
    chainId: 137,
    address: "0x0e9b89007eee9c958c0eda24ef70723c2c93dd58",
    name: "Ankr Reward Earning MATIC",
    symbol: "AMATICC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25742/thumb/a-matic-c-da4ec10dc9723e695700e25dbf8c8edf.png?1653462321",
  },
  {
    chainId: 137,
    address: "0xd86b5923f3ad7b585ed81b448170ae026c65ae9a",
    name: "Iron",
    symbol: "IRON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14588/thumb/logo_-_2021-03-31T123525.615.png?1617165339",
  },
  {
    chainId: 137,
    address: "0xbb6129911d3bbdadb447241d433b4ed529aebbd8",
    name: "REMI",
    symbol: "REMI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27218/thumb/image_%283%29.png?1662613755",
  },
  {
    chainId: 137,
    address: "0xe0b22e0037b130a9f56bbb537684e6fa18192341",
    name: "Matic Aave Interest Bearing DAI",
    symbol: "MADAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14075/thumb/maDAI.png?1614164633",
  },
  {
    chainId: 137,
    address: "0xd125443f38a69d776177c2b9c041f462936f8218",
    name: "FireBot",
    symbol: "FBX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21713/thumb/fbx200.png?1639785014",
  },
  {
    chainId: 137,
    address: "0x9dbfc1cbf7a1e711503a29b4b5f9130ebeccac96",
    name: "UpOnly",
    symbol: "UPO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24900/thumb/f-WNwLNJ_400x400.jpg?1649323846",
  },
  {
    chainId: 137,
    address: "0x4414ac21b60c504dfea0a27679b90a278c2ca962",
    name: "Pryz",
    symbol: "PRYZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15361/thumb/pryz.png?1639199590",
  },
  {
    chainId: 137,
    address: "0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6",
    name: "NASDEX",
    symbol: "NSDX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18634/thumb/nadex.PNG?1632727863",
  },
  {
    chainId: 137,
    address: "0x12a34a6759c871c4c1e8a0a42cfc97e4d7aaf68d",
    name: "Tutellus",
    symbol: "TUT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2327/thumb/tutellus-logo.png?1663922181",
  },
  {
    chainId: 137,
    address: "0x9dbad35e5ff07bdc1ed5cf37bc30f7439996df63",
    name: "Flag Media",
    symbol: "FLAG",
    decimals: 10,
    logoURI:
      "https://assets.coingecko.com/coins/images/28178/thumb/81220B16-8ED7-4AEB-8610-CEA74D1A4D36.jpeg?1668253199",
  },
  {
    chainId: 137,
    address: "0x61f95bd637e3034133335c1baa0148e518d438ad",
    name: "MetaShooter",
    symbol: "MHUNT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24985/thumb/200x200.png?1649681575",
  },
  {
    chainId: 137,
    address: "0xa6083abe845fbb8649d98b8586cbf50b7f233612",
    name: "Paycer Protocol",
    symbol: "PCR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23658/thumb/8pZI6RZG_400x400.jpg?1644988756",
  },
  {
    chainId: 137,
    address: "0x25c498781ca536547b147e2199f572e5393d36f0",
    name: "AirTnT",
    symbol: "AIRTNT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28328/thumb/airtnt.png?1669457251",
  },
  {
    chainId: 137,
    address: "0x6d802ac662b898622f7a13e1f4cb1a50c7085b6e",
    name: "MOVN",
    symbol: "MOV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26445/thumb/MOVN_Logo.png?1658110694",
  },
  {
    chainId: 137,
    address: "0x61daecab65ee2a1d5b6032df030f3faa3d116aa7",
    name: "Dark Magic",
    symbol: "DMAGIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15842/thumb/Dark_Magic.png?1622092194",
  },
  {
    chainId: 137,
    address: "0x182f1d39df9460d7aef29afbc80bbd68ed0a41d5",
    name: "RuufCoin",
    symbol: "RUUF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17968/thumb/44d23204-3919-4ba6-adaf-69a51b9621d8.png?1629947200",
  },
  {
    chainId: 137,
    address: "0xd57e36df3e3180ccdabfafacedf3dfaa08390fe9",
    name: "MAS FINANCE",
    symbol: "MAS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27093/thumb/20220822_011701.png?1661992074",
  },
  {
    chainId: 137,
    address: "0xc45abe05e9db3739791d1dc1b1638be8ad68b10b",
    name: "Digital Swiss Franc",
    symbol: "DSFR",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/18672/thumb/1627014783964.png?1632875931",
  },
  {
    chainId: 137,
    address: "0x9e84154798a96e8b50d96d423862da2c7c30ec4c",
    name: "aMLP",
    symbol: "AMLP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28014/thumb/CRYTOLOGO%281%29.png?1666948582",
  },
  {
    chainId: 137,
    address: "0x264808855b0a6a5a318d238c6ee9f299179f27fc",
    name: "The Space",
    symbol: "SPACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25929/thumb/The_Space_Logo.png?1654694545",
  },
  {
    chainId: 137,
    address: "0x8ea89abb7236ae4880ea8fdb42b98768d8eed505",
    name: "Encountr",
    symbol: "ENCTR",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/26428/thumb/CG_ENCTR_TokenIMG_200x.png?1657929778",
  },
  {
    chainId: 137,
    address: "0xb763f1177e9b2fb66fbe0d50372e3e2575c043e5",
    name: "Karmaverse",
    symbol: "KNOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24239/thumb/knot.png?1647088638",
  },
  {
    chainId: 137,
    address: "0xc1543024dc71247888a7e139c644f44e75e96d38",
    name: "Battle World",
    symbol: "BWO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25799/thumb/battleworld_logo_200x200.png?1653983575",
  },
  {
    chainId: 137,
    address: "0x93dcfe01dd256b9c9593ce2f5bf8488c4a78dde6",
    name: "Ethica",
    symbol: "ETHICA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26179/thumb/D5qFCZtn_400x400.png?1656382314",
  },
  {
    chainId: 137,
    address: "0x80487b4f8f70e793a81a42367c225ee0b94315df",
    name: "Stabl fi",
    symbol: "CASH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27558/thumb/qRnUZoW2_400x400.jpeg?1664517986",
  },
  {
    chainId: 137,
    address: "0x245e5ddb65efea6522fa913229df1f4957fb2e21",
    name: "LoserChick EGG",
    symbol: "EGG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17574/thumb/lRAQ2MOTpWqrHhI.png?1628551880",
  },
  {
    chainId: 137,
    address: "0x81ee105457c4eafc061b8c8fedc7bb45d22286d2",
    name: "Space Rebase XUSD",
    symbol: "XUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28311/thumb/XUSD.png?1669350292",
  },
  {
    chainId: 137,
    address: "0x5827661d7b95c99ce6ac832b89f8b77414e55ff8",
    name: "Aprobit",
    symbol: "ABT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27620/thumb/signage_%283%29.png?1664879025",
  },
  {
    chainId: 137,
    address: "0x9246a5f10a79a5a939b0c2a75a3ad196aafdb43b",
    name: "BetSwirl",
    symbol: "BETS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26618/thumb/icon_200.png?1659073275",
  },
  {
    chainId: 137,
    address: "0xfe1a200637464fbc9b60bc7aecb9b86c0e1d486e",
    name: "Lithium",
    symbol: "LITHIUM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17207/thumb/B4XYNU5.png?1626851250",
  },
  {
    chainId: 137,
    address: "0x9af3b7dc29d3c4b1a5731408b6a9656fa7ac3b72",
    name: "PUSD Polyquity",
    symbol: "PUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16762/thumb/PUSD-purple-200.png?1624937879",
  },
  {
    chainId: 137,
    address: "0xb2780c1d05e50a98f8851668b1b59b92054d1fbc",
    name: "GO2E GTE",
    symbol: "GTE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27885/thumb/logo_200_x_200.png?1666239126",
  },
  {
    chainId: 137,
    address: "0x561f7ae92a00c73dc48282d384e0a4fc1f4bc305",
    name: "Rebellion DAO",
    symbol: "REB",
    decimals: 21,
    logoURI:
      "https://assets.coingecko.com/coins/images/24805/thumb/rebellion_dao.png?1648991371",
  },
  {
    chainId: 137,
    address: "0x1fd6cf265fd3428f655378a803658942095b4c4e",
    name: "PolyYeld",
    symbol: "YELD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16401/thumb/pxSN2UtB_400x400.jpg?1623913991",
  },
  {
    chainId: 137,
    address: "0xa9a779aea33b6f40cfc78a29cf56fc7e6fb329ab",
    name: "Mama DAO",
    symbol: "MAMA",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22315/thumb/Y8Jennvy_400x400.jpg?1641452792",
  },
  {
    chainId: 137,
    address: "0x835df131c80cf4b27cefde256498e363cf8a4c27",
    name: "Rogue Coin",
    symbol: "ROGUE",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/18569/thumb/rogue.png?1652268183",
  },
  {
    chainId: 137,
    address: "0xb4228798ff437ecd8fa43429664e9992256fe6ac",
    name: "Kitty Coin",
    symbol: "KITTY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19555/thumb/kitty.png?1636332916",
  },
  {
    chainId: 137,
    address: "0x204820b6e6feae805e376d2c6837446186e57981",
    name: "ROND",
    symbol: "ROND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27601/thumb/rond.png?1664716228",
  },
  {
    chainId: 137,
    address: "0x60eec374a1ba3907e9bdd8a74ce368d041d89c79",
    name: "Parrotly",
    symbol: "PBIRB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28219/thumb/PARROTLY_BRAND_ASSETS__PARROTLY_ICON_BLUE_-_Copy_-_Copy_-_Copy.png?1668474102",
  },
  {
    chainId: 137,
    address: "0x874e178a2f3f3f9d34db862453cd756e7eab0381",
    name: "Gravity Finance",
    symbol: "GFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15871/thumb/GFI-Icon.png?1622178588",
  },
  {
    chainId: 137,
    address: "0x6f3cc27e17a0f2e52d8e7693ff0d892cea1854bf",
    name: "Gooeys",
    symbol: "GOO",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/25802/thumb/GOO-200.png?1653977205",
  },
  {
    chainId: 137,
    address: "0xeb2778f74e5ee038e67aa6c77f0f0451abd748fd",
    name: "PolyZap",
    symbol: "PZAP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15623/thumb/polyzap.png?1621349109",
  },
  {
    chainId: 137,
    address: "0xf9c1f70f9bf57fad5f63c6e1e25c2e895f04c0a6",
    name: "DeltaHub Community",
    symbol: "DHC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12656/thumb/DHC_Transparent_200x200.png?1601440150",
  },
  {
    chainId: 137,
    address: "0x6bca3b77c1909ce1a4ba1a20d1103bde8d222e48",
    name: "Nature Based Offset",
    symbol: "NBO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28076/thumb/C3_NBO_Gradient-01.png?1667393634",
  },
  {
    chainId: 137,
    address: "0xf796969fa47fb0748c80b8b153cbb895e88cbd54",
    name: "Ocavu Network",
    symbol: "OCAVU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25781/thumb/ocavu.png?1653736917",
  },
  {
    chainId: 137,
    address: "0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126",
    name: "Safle",
    symbol: "SAFLE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21674/thumb/56835021.png?1639710939",
  },
  {
    chainId: 137,
    address: "0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe",
    name: "IX",
    symbol: "IXT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20927/thumb/IXT_LOGO_PNG_RGB_200X.png?1657602069",
  },
  {
    chainId: 137,
    address: "0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9",
    name: "CelsiusX Wrapped ETH",
    symbol: "CXETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23682/thumb/k6iYoed.png?1644997440",
  },
  {
    chainId: 137,
    address: "0xe0f463832295adf63eb6ca053413a3f9cd8bf685",
    name: "Snowflake",
    symbol: "SNOW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28228/thumb/logo200.png?1668567816",
  },
  {
    chainId: 137,
    address: "0x2db0db271a10661e7090b6758350e18f6798a49d",
    name: "Mobius Finance",
    symbol: "MOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18144/thumb/11322.png?1630668459",
  },
  {
    chainId: 137,
    address: "0x52468c88e8b4f5bcca20a6a7813355637dc5e3ad",
    name: "Power Of Deep Ocean",
    symbol: "PODO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27645/thumb/PODO_TICKER_200.png?1665020330",
  },
  {
    chainId: 137,
    address: "0x5ec03c1f7fa7ff05ec476d19e34a22eddb48acdc",
    name: "ZED RUN",
    symbol: "ZED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26607/thumb/zed-run.jpeg?1659010387",
  },
  {
    chainId: 137,
    address: "0x03e3369af9390493cb7cc599cd5233d50e674da4",
    name: "Moss Governance",
    symbol: "MOSS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25639/thumb/moss-governance-token.png?1652942056",
  },
  {
    chainId: 137,
    address: "0xfbbd93fc3be8b048c007666af4846e4a36bacc95",
    name: "Poriverse",
    symbol: "RIKEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25167/thumb/FiRSQOuA_400x400.jpg?1650521971",
  },
  {
    chainId: 137,
    address: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
    name: "Aavegotchi FUD",
    symbol: "FUD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24736/thumb/fud.png?1648769512",
  },
  {
    chainId: 137,
    address: "0x8c42c4b5a49b33f895a41b45d17655b90c2c3945",
    name: "ZelaaNFT",
    symbol: "NFTZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26454/thumb/gNBjBgOO_400x400.jpeg?1658114894",
  },
  {
    chainId: 137,
    address: "0x3050731a7ab18d05eaa5e01d66df33e04444e72c",
    name: "ECS Gold",
    symbol: "ECG",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/27542/thumb/ECOSMART_LOGO_200X200.png?1664432758",
  },
  {
    chainId: 137,
    address: "0x40db6d7812b8288eca452f912ca9f262b186f278",
    name: "Greenhouse",
    symbol: "GREEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24415/thumb/greenhouse.PNG?1647573129",
  },
  {
    chainId: 137,
    address: "0x7a372798f9bafec9a4dce817e9d86c73e8c7d1ca",
    name: "Promo Swipe Coin",
    symbol: "PSC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21640/thumb/psc.png?1639631952",
  },
  {
    chainId: 137,
    address: "0x1fa2f83ba2df61c3d370071d61b17be01e224f3a",
    name: "Hive Investments HONEY",
    symbol: "HNY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24797/thumb/hny.png?1648980896",
  },
  {
    chainId: 137,
    address: "0xc68e83a305b0fad69e264a1769a0a070f190d2d6",
    name: "Polyroll",
    symbol: "ROLL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16590/thumb/qMFn5IB.png?1624523906",
  },
  {
    chainId: 137,
    address: "0x823cd4264c1b951c9209ad0deaea9988fe8429bf",
    name: "Matic Aave Interest Bearing AAVE",
    symbol: "MAAAVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14077/thumb/maAAVE.png?1614158144",
  },
  {
    chainId: 137,
    address: "0x0d0b8488222f7f83b23e365320a4021b12ead608",
    name: "Next Earth",
    symbol: "NXTT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23264/thumb/kG1zm83.png?1643363107",
  },
  {
    chainId: 137,
    address: "0x9a4eb698e5de3d3df0a68f681789072de1e50222",
    name: "Fidira",
    symbol: "FID",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19446/thumb/nl0qESy3_400x400.jpg?1635236436",
  },
  {
    chainId: 137,
    address: "0x0c8c8ae8bc3a69dc8482c01ceacfb588bb516b01",
    name: "AuroraToken",
    symbol: "AURORA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15345/thumb/aurora_tokenlogo.png?1620622117",
  },
  {
    chainId: 137,
    address: "0x5a3064cbdccf428ae907796cf6ad5a664cd7f3d8",
    name: "PolyQuity",
    symbol: "PYQ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16740/thumb/85542908.png?1624869736",
  },
  {
    chainId: 137,
    address: "0xf7058856f405542cd660e8ce4751248f2d037f2b",
    name: "Yayo Coin",
    symbol: "YAYO",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/16008/thumb/84341687.png?1622598816",
  },
  {
    chainId: 137,
    address: "0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e",
    name: "Augury Finance",
    symbol: "OMEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16573/thumb/omen.PNG?1624498786",
  },
  {
    chainId: 137,
    address: "0xcbce9f77921c2e90522d438df4c5582f4c617768",
    name: "AGA Carbon Rewards",
    symbol: "ACAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16729/thumb/acr128.png?1624856646",
  },
  {
    chainId: 137,
    address: "0x66c59dded4ef01a3412a8b019b6e41d4a8c49a35",
    name: "SafeDollar",
    symbol: "SDO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16887/thumb/1_551bIKFiNCvKXdUloML0wA_%281%29.png?1625549180",
  },
  {
    chainId: 137,
    address: "0xe118e8b6dc166cd83695825eb1d30e792435bb00",
    name: "FireBall",
    symbol: "FIRE",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/15644/thumb/fireball.png?1621413326",
  },
  {
    chainId: 137,
    address: "0x83c92e1a4a824cd42f94012b7b50aff372e4d25f",
    name: "Cryptocurrency Market Index",
    symbol: "CMI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23542/thumb/CMI_200x200.png?1644391107",
  },
  {
    chainId: 137,
    address: "0x36ff415d0bcedf976d60e85c72e01d19230fbd29",
    name: "Hobonickels",
    symbol: "HBN",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/59/thumb/hobonickels.png?1547033710",
  },
  {
    chainId: 137,
    address: "0x925fadb35b73720238cc78777d02ed4dd3100816",
    name: "AutoSingle",
    symbol: "AUTOS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27083/thumb/autos.png?1661764923",
  },
  {
    chainId: 137,
    address: "0xaec815ae1e9ab58f49692aec2840ffc82c56f7e5",
    name: "IDOL",
    symbol: "IDOL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22458/thumb/2cUUypxU_400x400.png?1641879690",
  },
  {
    chainId: 137,
    address: "0x94788309d420ad9f9f16d79fc13ab74de83f85f7",
    name: "Stable One Rocket",
    symbol: "SROCKET",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26361/thumb/srocket.jpeg?1657595223",
  },
  {
    chainId: 137,
    address: "0x6c526368e1185e4cd8a50468eb3429c5aeb674f3",
    name: "Selfbar",
    symbol: "SBAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20599/thumb/sbar-icon.png?1637286886",
  },
  {
    chainId: 137,
    address: "0x0bd49815ea8e2682220bcb41524c0dd10ba71d41",
    name: "Playermon",
    symbol: "PYM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20682/thumb/eALRa3rZ_400x400.png?1637552321",
  },
  {
    chainId: 137,
    address: "0xc8bcb58caef1be972c0b638b1dd8b0748fdc8a44",
    name: "Pear",
    symbol: "PEAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17173/thumb/pear200.png?1626793002",
  },
  {
    chainId: 137,
    address: "0x5dfd5edfde4d8ec9e632dca9d09fc7e833f74210",
    name: "Infinity Skies",
    symbol: "ISKY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22583/thumb/isky.png?1642141576",
  },
  {
    chainId: 137,
    address: "0x90f3edc7d5298918f7bb51694134b07356f7d0c7",
    name: "DeFi Hunters DAO",
    symbol: "DDAO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23018/thumb/DDAO_PNG.png?1667125085",
  },
  {
    chainId: 137,
    address: "0x0da6a7a0a2e7525950204bb2c511e47a52235b17",
    name: "MT Token",
    symbol: "MT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27457/thumb/mt_logo_200x200.png?1664105234",
  },
  {
    chainId: 137,
    address: "0xd6d3b4254b4526c3095d8ab00b75f186c56dd72c",
    name: "Lithium Ventures",
    symbol: "IONS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15298/thumb/lithium_ions.jpg?1654845787",
  },
  {
    chainId: 137,
    address: "0xb82a20b4522680951f11c94c54b8800c1c237693",
    name: "Honor",
    symbol: "HONOR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16654/thumb/Qkj26Aj.png?1624599365",
  },
  {
    chainId: 137,
    address: "0xf78610d0a197842bf98ca45254897edd13c5d182",
    name: "FreshCut Diamond",
    symbol: "FCD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24570/thumb/FCD_small_200.png?1648193725",
  },
  {
    chainId: 137,
    address: "0xb6169e71144b4debd9caa2dbb851fc8ffde6119f",
    name: "DuDe",
    symbol: "DUDE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25924/thumb/dude-logo-png.jpg?1654672849",
  },
  {
    chainId: 137,
    address: "0x6bb45ceac714c52342ef73ec663479da35934bf7",
    name: "PolyPup Bone",
    symbol: "BONE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16819/thumb/9.png?1625176517",
  },
  {
    chainId: 137,
    address: "0xce4e6da9c509cb33c23d748713c681c959f68658",
    name: "PolyYield",
    symbol: "YIELD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16656/thumb/polylogo.png?1624602286",
  },
  {
    chainId: 137,
    address: "0xf868939ee81f04f463010bc52eab91c0839ef08c",
    name: "Attack Wagon",
    symbol: "ATK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21333/thumb/attack.PNG?1638948221",
  },
  {
    chainId: 137,
    address: "0x02649c1ff4296038de4b9ba8f491b42b940a8252",
    name: "Exchange Genesis Ethlas Medium",
    symbol: "XGEM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22535/thumb/17200.png?1642023748",
  },
  {
    chainId: 137,
    address: "0x340f412860da7b7823df372a2b59ff78b7ae6abc",
    name: "Index Coop   Inverse MATIC Flexible Lev",
    symbol: "IMATIC-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23424/thumb/iMATIC-FLI-P-512_%28pulse_red%29.png?1644203917",
  },
  {
    chainId: 137,
    address: "0x480fd103973357266813ecfce9faababf3c4ca3a",
    name: "H3RO3S",
    symbol: "H3RO3S",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20906/thumb/h3roes.PNG?1639784887",
  },
  {
    chainId: 137,
    address: "0xdda40cdfe4a0090f42ff49f264a831402adb801a",
    name: "Dogira",
    symbol: "DOGIRA",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/14634/thumb/IQgaRw0.png?1622439620",
  },
  {
    chainId: 137,
    address: "0x669ddc70273084ea30e6cd4f28ca6e2c70735065",
    name: "AGA Carbon Credit",
    symbol: "AGAC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16728/thumb/agac128.png?1624856514",
  },
  {
    chainId: 137,
    address: "0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
    name: "Nacho Finance",
    symbol: "NACHO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21635/thumb/NF_nacho_2_200x200.png?1639627573",
  },
  {
    chainId: 137,
    address: "0x8db0a6d1b06950b4e81c4f67d1289fc7b9359c7f",
    name: "Enegra",
    symbol: "EGX",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/23082/thumb/imgonline-com-ua-Resize-LHUSvWAko1XuD.png?1643179587",
  },
  {
    chainId: 137,
    address: "0x7e4c577ca35913af564ee2a24d882a4946ec492b",
    name: "MoonEdge",
    symbol: "MOONED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17393/thumb/ME_logo_200_200.png?1627526275",
  },
  {
    chainId: 137,
    address: "0xf8eed914a0bacaf30c13420989bb7c81b75d833a",
    name: "Dawn Star Share",
    symbol: "SOLAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27743/thumb/solar.png?1665631361",
  },
  {
    chainId: 137,
    address: "0xf287d97b6345bad3d88856b26fb7c0ab3f2c7976",
    name: "Index Coop   MATIC 2x Flexible Leverage",
    symbol: "MATIC2X-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23388/thumb/MATIC2x-FLI.png?1644061428",
  },
  {
    chainId: 137,
    address: "0x095bc617b36ab227a379550633dfdcbf43f236f6",
    name: "Dawn Star Token",
    symbol: "DSF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27736/thumb/dsf.png?1665567129",
  },
  {
    chainId: 137,
    address: "0xc0eb3503f35e736f6c2861fafcde9baff72a50ff",
    name: "Carbonic",
    symbol: "CO2",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25975/thumb/logo_%281%29.png?1655112288",
  },
  {
    chainId: 137,
    address: "0x2ed945dc703d85c80225d95abde41cdee14e1992",
    name: "Polysage",
    symbol: "SAGE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18967/thumb/polysage.PNG?1634027493",
  },
  {
    chainId: 137,
    address: "0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309",
    name: "Snook",
    symbol: "SNK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18197/thumb/snk.png?1630979321",
  },
  {
    chainId: 137,
    address: "0x8c9bac920cd9cf8c61f7fa4f34f43c572d040f61",
    name: "Entice",
    symbol: "NTIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28257/thumb/ntic.png?1668688637",
  },
  {
    chainId: 137,
    address: "0x9a41e03fef7f16f552c6fba37ffa7590fb1ec0c4",
    name: "Arch Blockchains",
    symbol: "CHAIN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26563/thumb/CHAINS.png?1658798607",
  },
  {
    chainId: 137,
    address: "0xbd8005612124dc30601e22d8b5d188a89767c640",
    name: "Exohood",
    symbol: "EXO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15590/thumb/LOGO_200x200_CIRCLE.png?1658837040",
  },
  {
    chainId: 137,
    address: "0x173bead008df7ba34d0d04e3d6dd01a6db345c52",
    name: "ZelaaNFT  OLD ",
    symbol: "NFTZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26379/thumb/ZelaaNFT_%2817%29.png?1657677382",
  },
  {
    chainId: 137,
    address: "0x88c949b4eb85a90071f2c0bef861bddee1a7479d",
    name: "Sheesha Finance Polygon",
    symbol: "MSHEESHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23494/thumb/sheesha.PNG?1644222241",
  },
  {
    chainId: 137,
    address: "0x6f06e6bed64cf4c4187c06ee2a4732f6a171bc4e",
    name: "FoodChain Global",
    symbol: "FOOD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23755/thumb/food.png?1645347956",
  },
  {
    chainId: 137,
    address: "0x859a50979fdb2a2fd8ba1adcc66977c6f6b1cd5b",
    name: "Mad Meerkat Optimizer  Polygon ",
    symbol: "MMO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27012/thumb/21545.png?1661422571",
  },
  {
    chainId: 137,
    address: "0x346404079b3792a6c548b072b9c4dddfb92948d5",
    name: "GeniuX",
    symbol: "IUX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26078/thumb/black_IUX-coin-logo2.png?1661767150",
  },
  {
    chainId: 137,
    address: "0x5d48a5e5a3e737322ae27e25897f1c9e19ecc941",
    name: "OkLetsPlay",
    symbol: "OKLP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22796/thumb/262654028_2202751929890590_982664396355018092_n.png?1642582073",
  },
  {
    chainId: 137,
    address: "0x948d0a28b600bdbd77af4ea30e6f338167034181",
    name: "NSHARE",
    symbol: "NSHARE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21692/thumb/NF_nshare_2_200x200.png?1639721239",
  },
  {
    chainId: 137,
    address: "0xcb898b0efb084df14dd8e018da37b4d0f06ab26d",
    name: "Sing",
    symbol: "SING",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17682/thumb/200_%2810%29.png?1628841873",
  },
  {
    chainId: 137,
    address: "0x124c31a823cdf7cd391adaee4aa32455eb3e76ca",
    name: "FrontFanz",
    symbol: "FANZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27722/thumb/FrontFanz.jpg?1665537401",
  },
  {
    chainId: 137,
    address: "0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6",
    name: "Geopoly",
    symbol: "GEO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21632/thumb/Geopoly_Token.png?1639626863",
  },
  {
    chainId: 137,
    address: "0x3801c3b3b5c98f88a9c9005966aa96aa440b9afc",
    name: "GAX Liquidity Token Reward",
    symbol: "GLTR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25790/thumb/gltr-token.png?1653917818",
  },
  {
    chainId: 137,
    address: "0x998013798440d44c1dd4c767bdd9580e16e46e28",
    name: "ITSBLOC",
    symbol: "ITSB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27268/thumb/ezgif-2-1826f94a8a.jpeg?1663135869",
  },
  {
    chainId: 137,
    address: "0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f",
    name: "WolfSafePoorPeople Polygon",
    symbol: "WSPP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19514/thumb/wspplogo.png?1635319669",
  },
  {
    chainId: 137,
    address: "0xe84c2edca71fc3cc570c70665178d90c8721623b",
    name: "VRJAM",
    symbol: "VRJAM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28049/thumb/VRJAM_coin_logo_%28gradient_on_white%29.png?1667279615",
  },
  {
    chainId: 137,
    address: "0xc2a45fe7d40bcac8369371b08419ddafd3131b4a",
    name: "Lucidao",
    symbol: "LCD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23693/thumb/lcd-icon-color-200px.png?1645450706",
  },
  {
    chainId: 137,
    address: "0x29f1e986fca02b7e54138c04c4f503dddd250558",
    name: "VESQ",
    symbol: "VSQ",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22164/thumb/vesq.png?1641121315",
  },
  {
    chainId: 137,
    address: "0xae29ac47a9e3b0a52840e547adf74b912999f7fc",
    name: "EVE",
    symbol: "EVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22744/thumb/eve-exchange-logo-200-200-03.png?1643459572",
  },
  {
    chainId: 137,
    address: "0x4f025829c4b13df652f38abd2ab901185ff1e609",
    name: "Index Coop   Inverse ETH Flexible Lever",
    symbol: "IETH-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23426/thumb/iETH-FLI-P-512_%28pulse_red%29.png?1644204746",
  },
  {
    chainId: 137,
    address: "0x2e6978ceea865948f4c5685e35aec72652e3cb88",
    name: "tPLATINUM",
    symbol: "TXPT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27830/thumb/tPLATINUM_token_2D.jpg?1666165908",
  },
  {
    chainId: 137,
    address: "0x7f36c54da31b2dd355caffec0249f26da41e3fcd",
    name: "ENO",
    symbol: "ENO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26501/thumb/Eno_logo.png?1658364451",
  },
  {
    chainId: 137,
    address: "0x18a4f192fa327f4b8ab0a67e938df17383b4cf96",
    name: "Orion Cash",
    symbol: "ORC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27377/thumb/LOGO.png?1663734828",
  },
  {
    chainId: 137,
    address: "0xf5ea626334037a2cf0155d49ea6462fddc6eff19",
    name: "PolygonFarm Finance",
    symbol: "SPADE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17364/thumb/Polygon-Farm-Finance-Logo-200x200.png?1627389003",
  },
  {
    chainId: 137,
    address: "0x778949e707a0eb6c32ca20b1f9e0db9685d18024",
    name: "Gamesta",
    symbol: "GSG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21410/thumb/logo_-_2021-12-10T070925.667.png?1639091381",
  },
  {
    chainId: 137,
    address: "0xf972daced7c6b03223710c11413036d17eb298f6",
    name: "Impermax",
    symbol: "IBEX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27606/thumb/IqwOmX-c_400x400.jpeg?1664846656",
  },
  {
    chainId: 137,
    address: "0xdd2af2e723547088d3846841fbdcc6a8093313d6",
    name: "GOGOcoin",
    symbol: "GOGO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21341/thumb/gogo.png?1638952136",
  },
  {
    chainId: 137,
    address: "0x4c665bbafd28ec9e5d792345f470ebfca21e3d15",
    name: "SKYPlay",
    symbol: "SKP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27129/thumb/SKP_logo_20x20.png?1662021510",
  },
  {
    chainId: 137,
    address: "0xed88227296943857409a8e0f15ad7134e70d0f73",
    name: "Lumiii",
    symbol: "LUMIII",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27424/thumb/lumiii-icon-200x200.png?1663899058",
  },
  {
    chainId: 137,
    address: "0x1da554d34027ca8de74c5b1cd2fa53a8a1492c94",
    name: "PolyLion",
    symbol: "LION",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15578/thumb/logo_-_2021-05-17T161550.501.png?1621239357",
  },
  {
    chainId: 137,
    address: "0xdd9ba3b2571bea0854beb0508ce10fed0eca7e3e",
    name: "EnviDa",
    symbol: "EDAT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20342/thumb/logo1.png?1636941786",
  },
  {
    chainId: 137,
    address: "0x44a6e0be76e1d9620a7f76588e4509fe4fa8e8c8",
    name: "Aavegotchi FOMO",
    symbol: "FOMO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24737/thumb/fomo.png?1648769659",
  },
  {
    chainId: 137,
    address: "0xe8377a076adabb3f9838afb77bee96eac101ffb1",
    name: "MetaSoccer",
    symbol: "MSU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21670/thumb/Om_U3jQg_400x400.jpg?1639706776",
  },
  {
    chainId: 137,
    address: "0x3068382885602fc0089aec774944b5ad6123ae60",
    name: "PDSHARE",
    symbol: "PDSHARE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24963/thumb/pdshare.png?1649574782",
  },
  {
    chainId: 137,
    address: "0x01d35cbc2070a3b76693ce2b6364eae24eb88591",
    name: "Polygen",
    symbol: "PGEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21476/thumb/polygen-logo_1.jpeg?1639350369",
  },
  {
    chainId: 137,
    address: "0x566664c32138605176f9d3f50c747ab417b1b256",
    name: "EnkiX",
    symbol: "EKX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24541/thumb/hero-1.png?1648090252",
  },
  {
    chainId: 137,
    address: "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
    name: "KogeCoin",
    symbol: "KOGECOIN",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/17546/thumb/koge.PNG?1628204432",
  },
  {
    chainId: 137,
    address: "0x623a1350f6b749575f92ea54d0f745f9f07d3665",
    name: "Karmaverse Zombie Serum",
    symbol: "SERUM",
    decimals: 0,
    logoURI:
      "https://assets.coingecko.com/coins/images/26002/thumb/serum.png?1660904985",
  },
  {
    chainId: 137,
    address: "0x9a05d1ff699ea187dc8523e333ed63503f0d82db",
    name: "BabyQuick",
    symbol: "BABYQUICK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20147/thumb/4fa6uMzp_400x400.jpg?1636551709",
  },
  {
    chainId: 137,
    address: "0x00658fc8ec685727f3f59d381b8ad8f5e0fedbc2",
    name: "SIKKA",
    symbol: "SIKKA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27201/thumb/SIKKA_logo_cmc.png?1662601915",
  },
  {
    chainId: 137,
    address: "0xd0cfd20e8bbdb7621b705a4fd61de2e80c2cd02f",
    name: "Safeswap SSGTX",
    symbol: "SSGTX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20769/thumb/GBpj6TpI.png?1638362807",
  },
  {
    chainId: 137,
    address: "0x51b5619f5180e333d18b6310c8d540aea43a0371",
    name: "Vault Hill City",
    symbol: "VHC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23120/thumb/vhclogo.3929f10d.png?1649306889",
  },
  {
    chainId: 137,
    address: "0xdacc6be178f123d22b672808d8494eda03c6ebc4",
    name: "Answerly",
    symbol: "ANSR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18426/thumb/logo_-_2021-09-17T161041.106.png?1631866268",
  },
  {
    chainId: 137,
    address: "0xb4666b7402d287347dbbdc4ea5b30e80c376c0b3",
    name: "Vulcan Forged LAVA",
    symbol: "LAVA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26858/thumb/13856.png?1660528181",
  },
  {
    chainId: 137,
    address: "0xabede05598760e399ed7eb24900b30c51788f00f",
    name: "Stepwatch",
    symbol: "SWP",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/26384/thumb/MPY_u-OE_400x400.jpg?1657678801",
  },
  {
    chainId: 137,
    address: "0x0169ec1f8f639b32eec6d923e24c2a2ff45b9dd6",
    name: "Algebra",
    symbol: "ALGB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19580/thumb/13211.png?1635469023",
  },
  {
    chainId: 137,
    address: "0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c",
    name: "Decentral Games ICE",
    symbol: "ICE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18110/thumb/ice-poker.png?1630500966",
  },
  {
    chainId: 137,
    address: "0x5617604ba0a30e0ff1d2163ab94e50d8b6d0b0df",
    name: "AthleteX",
    symbol: "AX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18762/thumb/AXlogo.png?1633356150",
  },
  {
    chainId: 137,
    address: "0xffb9f1907f827709b0ed09b37956cd3c7462abdb",
    name: "Yellow Duckies",
    symbol: "DUCKIES",
    decimals: 2,
    logoURI:
      "https://assets.coingecko.com/coins/images/27630/thumb/Icon_coin_200px.png?1665748614",
  },
  {
    chainId: 137,
    address: "0x950e1561b7a7deb1a32a6419fd435410daf851b0",
    name: "Decentralized Universal Basic Income",
    symbol: "DUBI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2606/thumb/decentralized-universal-basic-income.png?1547036752",
  },
  {
    chainId: 137,
    address: "0x990a524ebc0a54fd2a7ebc02a1ce54d309fb5cd3",
    name: "Cypherdog Token",
    symbol: "CDOG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27845/thumb/Cypherdog_Token_Coin.png?1666066592",
  },
  {
    chainId: 137,
    address: "0x37eb60f78e06c4bb2a5f836b0fc6bccbbaa995b3",
    name: "Hanzo",
    symbol: "HANZO",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/15486/thumb/hanzo.png?1635830733",
  },
  {
    chainId: 137,
    address: "0x6a3e7c3c6ef65ee26975b12293ca1aad7e1daed2",
    name: "Aavegotchi ALPHA",
    symbol: "ALPHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24738/thumb/alpha.png?1648769768",
  },
  {
    chainId: 137,
    address: "0x32934cb16da43fd661116468c1b225fc26cf9a8c",
    name: "StrongNode",
    symbol: "SNE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19303/thumb/sne.png?1640227905",
  },
  {
    chainId: 137,
    address: "0xa936e1f747d14fc30d08272d065c8aef4ab7f810",
    name: "wLitiDAO",
    symbol: "WLD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24106/thumb/200px-cmc.png?1646376154",
  },
  {
    chainId: 137,
    address: "0xb1c5c9b97b35592777091cd34ffff141ae866abd",
    name: "Ubiq",
    symbol: "UBQ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/181/thumb/ubiq.png?1547033919",
  },
  {
    chainId: 137,
    address: "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a",
    name: "IRON Titanium",
    symbol: "TITAN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16031/thumb/titan.png?1636080284",
  },
  {
    chainId: 137,
    address: "0xd201b8511aab3e9b094b35abcd5d7863c78d6d0e",
    name: "PolyShark Finance",
    symbol: "SHARK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15398/thumb/2KY2RdEo_400x400.png?1620714513",
  },
  {
    chainId: 137,
    address: "0x21de43d96cfddd203da3352545e0054534776652",
    name: "PolyYork",
    symbol: "YORK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17558/thumb/polyyork.PNG?1628228872",
  },
  {
    chainId: 137,
    address: "0x187ae45f2d361cbce37c6a8622119c91148f261b",
    name: "Polylastic",
    symbol: "POLX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15331/thumb/logo-mark-transparent_4x.png?1620570063",
  },
  {
    chainId: 137,
    address: "0x05089c9ebffa4f0aca269e32056b1b36b37ed71b",
    name: "Polywhale",
    symbol: "KRILL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15016/thumb/2.png?1619442213",
  },
  {
    chainId: 137,
    address: "0x9f95e17b2668afe01f8fbd157068b0a4405cc08d",
    name: "Bullieverse",
    symbol: "BULL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24174/thumb/KR3qVAQe_400x400.jpg?1646747837",
  },
  {
    chainId: 137,
    address: "0xd9a2c5c0fb2f138c2b96582d29a648df70f80465",
    name: "PolyCake Finance",
    symbol: "PCAKE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15783/thumb/0S_K8CFb_400x400.jpg?1621844145",
  },
  {
    chainId: 137,
    address: "0x0184316f58b9a44acdd3e683257259dc0cf2202a",
    name: "PolyGold",
    symbol: "POLYGOLD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16055/thumb/wYRJKCT.png?1622699065",
  },
  {
    chainId: 137,
    address: "0xb32b9e8bc382e7bb64d8def2982cd19785ef64cf",
    name: "SeedBox",
    symbol: "SBX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28028/thumb/logo_200.png?1667047200",
  },
  {
    chainId: 137,
    address: "0x51869836681bce74a514625c856afb697a013797",
    name: "Genesis Worlds",
    symbol: "GENESIS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19905/thumb/kKkWmniB_400x400.jpg?1636100432",
  },
  {
    chainId: 137,
    address: "0x99da82c5464c49962cdda44fe30d352bc5da0580",
    name: "QuickChart",
    symbol: "QUICKCHART",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/15387/thumb/3-E7934-AD-31-CC-4-A62-8526-82-B0-DE53-BBFB.png?1620702415",
  },
  {
    chainId: 137,
    address: "0x0b048d6e01a6b9002c291060bf2179938fd8264c",
    name: "PolyAlpha Finance",
    symbol: "ALPHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18402/thumb/Poly-Alpha-200x200.png?1631782835",
  },
  {
    chainId: 137,
    address: "0x329f5e8aff351327e63acdb264389c798a46c2d3",
    name: "PolyGamma Finance",
    symbol: "GAMMA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19590/thumb/gamma.png?1635473502",
  },
  {
    chainId: 137,
    address: "0x23e8b6a3f6891254988b84da3738d2bfe5e703b9",
    name: "Fabwelt",
    symbol: "WELT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20505/thumb/welt.PNG?1637143324",
  },
  {
    chainId: 137,
    address: "0x0e59d50add2d90f5111aca875bae0a72d95b4762",
    name: "Dark Build",
    symbol: "DB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14195/thumb/DARK-circle_token_200px.png?1614853053",
  },
  {
    chainId: 137,
    address: "0x03f61137bfb86be07394f0fd07a33984020f96d8",
    name: "Xpendium",
    symbol: "XPND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24520/thumb/2XyH_HyB_400x400.jpg?1647963390",
  },
  {
    chainId: 137,
    address: "0xac3090b7042fca2cdbf233022e4a9823a032600c",
    name: "PolyBeta Finance",
    symbol: "BETA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18746/thumb/Poly-Beta-200-x-200-px.png?1633316632",
  },
  {
    chainId: 137,
    address: "0x8a953cfe442c5e8855cc6c61b1293fa648bae472",
    name: "PolyDoge",
    symbol: "POLYDOGE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15146/thumb/p1kSco1h_400x400.jpg?1619842715",
  },
  {
    chainId: 137,
    address: "0x9c891326fd8b1a713974f73bb604677e1e63396d",
    name: "ISLAMICOIN",
    symbol: "ISLAMI",
    decimals: 7,
    logoURI:
      "https://assets.coingecko.com/coins/images/24749/thumb/3100-x-3100-px-e1632233028219.png?1648786180",
  },
  {
    chainId: 137,
    address: "0x4550003152f12014558e5ce025707e4dd841100f",
    name: "Kaizen",
    symbol: "KZEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24396/thumb/PKl5OVRv_400x400.png?1647522756",
  },
  {
    chainId: 137,
    address: "0xe46b4a950c389e80621d10dfc398e91613c7e25e",
    name: "PartyFi",
    symbol: "PFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27548/thumb/GU_yPtme_400x400.jpeg?1664442276",
  },
  {
    chainId: 137,
    address: "0x8f18dc399594b451eda8c5da02d0563c0b2d0f16",
    name: "moonwolf io",
    symbol: "WOLF",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/14698/thumb/oC37AkkD_400x400.jpg?1617835365",
  },
  {
    chainId: 137,
    address: "0x3a3e7650f8b9f667da98f236010fbf44ee4b2975",
    name: "xDollar Stablecoin",
    symbol: "XUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16291/thumb/xUSD-web-transparent.png?1623661715",
  },
  {
    chainId: 137,
    address: "0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef",
    name: "Iron Finance",
    symbol: "ICE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17024/thumb/ice_logo.jpg?1626104736",
  },
  {
    chainId: 137,
    address: "0xdab35042e63e93cc8556c9bae482e5415b5ac4b1",
    name: "Iris",
    symbol: "IRIS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18361/thumb/hermes.PNG?1631609306",
  },
  {
    chainId: 137,
    address: "0x263026e7e53dbfdce5ae55ade22493f828922965",
    name: "Ricochet",
    symbol: "RIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21734/thumb/QmVRVhNWj2Q2qZG3WBSRfwwF6x6onLtSE4MbxvHu3uudW4.png?1639970692",
  },
  {
    chainId: 137,
    address: "0x22e3f02f86bc8ea0d73718a2ae8851854e62adc5",
    name: "FireStarter",
    symbol: "FLAME",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17359/thumb/WhiteOnBlack_Primary_Logo.png?1636960502",
  },
  {
    chainId: 137,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14073/thumb/matic.png?1628852392",
  },
  {
    chainId: 137,
    address: "0xcd7361ac3307d1c5a46b63086a90742ff44c63b3",
    name: "Crypto Raiders",
    symbol: "RAIDER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17638/thumb/Ue3Hfh8.png?1630737936",
  },
  {
    chainId: 137,
    address: "0xefee2de82343be622dcb4e545f75a3b9f50c272d",
    name: "TryHards",
    symbol: "TRY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18624/thumb/TryHards_Tokenticker.png?1650437198",
  },
  {
    chainId: 137,
    address: "0x62f594339830b90ae4c084ae7d223ffafd9658a7",
    name: "Sphere Finance",
    symbol: "SPHERE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24424/thumb/2iR2JsL.png?1647655357",
  },
  {
    chainId: 137,
    address: "0x82362ec182db3cf7829014bc61e9be8a2e82868a",
    name: "Meshswap Protocol",
    symbol: "MESH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25609/thumb/VxtSquTp_400x400.jpeg?1652844613",
  },
  {
    chainId: 137,
    address: "0x311434160d7537be358930def317afb606c0d737",
    name: "Nakamoto Games",
    symbol: "NAKA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19073/thumb/flCKDeh6_400x400.jpg?1634280509",
  },
  {
    chainId: 137,
    address: "0x29e3e6ad4eeadf767919099ee23c907946435a70",
    name: "Thunder Lands",
    symbol: "TNDR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26488/thumb/logo_v3.png?1658283295",
  },
  {
    chainId: 137,
    address: "0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f",
    name: "Crypto Unicorns Rainbow",
    symbol: "RBW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24498/thumb/icon_rbw.png?1648019306",
  },
  {
    chainId: 137,
    address: "0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689",
    name: "Wicrypt",
    symbol: "WNT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21223/thumb/wicrypt.PNG?1638740788",
  },
  {
    chainId: 137,
    address: "0x3b56a704c01d650147ade2b8cee594066b3f9421",
    name: "Affyn",
    symbol: "FYN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23275/thumb/fyn.png?1643526250",
  },
  {
    chainId: 137,
    address: "0x34d4ab47bee066f361fa52d792e69ac7bd05ee23",
    name: "Raider Aurum",
    symbol: "AURUM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18131/thumb/xcqAUkU.png?1630627565",
  },
  {
    chainId: 137,
    address: "0x39ab6574c289c3ae4d88500eec792ab5b947a5eb",
    name: "Dystopia",
    symbol: "DYST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25786/thumb/dystopialogo.jpg?1653882298",
  },
  {
    chainId: 137,
    address: "0x9008d70a5282a936552593f410abcbce2f891a97",
    name: "Penrose Finance",
    symbol: "PEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26105/thumb/6iWxdkG.png?1655872325",
  },
  {
    chainId: 137,
    address: "0x228b5c21ac00155cf62c57bcc704c0da8187950b",
    name: "Nexus Dubai",
    symbol: "NXD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23414/thumb/nexus.PNG?1644187373",
  },
  {
    chainId: 137,
    address: "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034",
    name: "Banano",
    symbol: "BAN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/6226/thumb/banano-transparent.png?1619589798",
  },
  {
    chainId: 137,
    address: "0xc79ae93d9c215eaa8c8da5c77e465bac7de28891",
    name: "pax world",
    symbol: "PAXW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27944/thumb/paxcoin_200.fw.png?1666604081",
  },
  {
    chainId: 137,
    address: "0x22a31bd4cb694433b6de19e0acc2899e553e9481",
    name: "MMFinance  Polygon ",
    symbol: "MMF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26840/thumb/1.png?1660352178",
  },
  {
    chainId: 137,
    address: "0x483dd3425278c1f79f377f1034d9d2cae55648b6",
    name: "CrowdSwap",
    symbol: "CROWD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23928/thumb/icon_192.png?1645690364",
  },
  {
    chainId: 137,
    address: "0x5f0197ba06860dac7e31258bdf749f92b6a636d4",
    name: "Flare",
    symbol: "1FLR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19114/thumb/flr.png?1638238607",
  },
  {
    chainId: 137,
    address: "0xaa9654becca45b5bdfa5ac646c939c62b527d394",
    name: "DinoSwap",
    symbol: "DINO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17103/thumb/DINO.png?1626244014",
  },
  {
    chainId: 137,
    address: "0x301595f6fd5f69fad7a488dacb8971e7c0c2f559",
    name: "Wrapped ThunderPOKT",
    symbol: "WTPOKT",
    decimals: 12,
    logoURI:
      "https://assets.coingecko.com/coins/images/24835/thumb/vjCQH6sw.jpg?1649060228",
  },
  {
    chainId: 137,
    address: "0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f",
    name: "Voxies",
    symbol: "VOXEL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21260/thumb/voxies.png?1638789903",
  },
  {
    chainId: 137,
    address: "0x5ceebb0947d58fabde2fc026ffe4b33ccfe1ba8b",
    name: "4INT",
    symbol: "4INT",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/23444/thumb/logo_ff_200x200.jpg?1644213123",
  },
  {
    chainId: 137,
    address: "0x656bf6767fa8863ac0dd0b7d2a26602b838a2e70",
    name: "Fitmint",
    symbol: "FITT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27021/thumb/Fitmint_logo.png?1661483846",
  },
  {
    chainId: 137,
    address: "0xcb3fe445e9c118e2232203b1d4a44f900cbd95b2",
    name: "XSHIP",
    symbol: "XSHIP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28084/thumb/CRYTOLOGO%281%29.png?1667443876",
  },
  {
    chainId: 137,
    address: "0xf28164a485b0b2c90639e47b0f377b4a438a16b1",
    name: "Dragon s Quick",
    symbol: "DQUICK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15185/thumb/quickswap.png?1620044811",
  },
  {
    chainId: 137,
    address: "0xf63a19b7793a2779566068deb1e9102868db56e6",
    name: "aMMF",
    symbol: "AMMF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28015/thumb/CRYTOLOGO%282%29.png?1666948864",
  },
  {
    chainId: 137,
    address: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
    name: "Toucan Protocol  Base Carbon Tonne",
    symbol: "BCT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19240/thumb/bct_exchange_enhanced.png?1641441498",
  },
  {
    chainId: 137,
    address: "0xc004e2318722ea2b15499d6375905d75ee5390b8",
    name: "Kommunitas",
    symbol: "KOM",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/17483/thumb/1_f1S3h57YLT1e1cl8g7RJpw_2x.jpeg?1627956421",
  },
  {
    chainId: 137,
    address: "0x999e2e604f48de45480f97b5037a70aa2a78b488",
    name: "Kindly",
    symbol: "KIND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27434/thumb/200x200_Logo_Kindly_Symbol_Green_White-Inside_Green_Transparent.png?1663927057",
  },
  {
    chainId: 137,
    address: "0x2a1f0ad3cab040e28845734d932f3ff0a24b14f4",
    name: "The Realm Defenders",
    symbol: "TRD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20734/thumb/g5IogLIJ_400x400.jpg?1637617954",
  },
  {
    chainId: 137,
    address: "0x723b17718289a91af252d616de2c77944962d122",
    name: "Gaia Everworld",
    symbol: "GAIA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19629/thumb/gaia.png?1646481791",
  },
  {
    chainId: 137,
    address: "0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae",
    name: "Pegaxy Stone",
    symbol: "PGX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19305/thumb/Logo_200x200_%281%29.png?1634972378",
  },
  {
    chainId: 137,
    address: "0xdfce1e99a31c4597a3f8a8945cbfa9037655e335",
    name: "Astrafer",
    symbol: "ASTRAFER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26246/thumb/ATSRA_Token.png?1657276411",
  },
  {
    chainId: 137,
    address: "0x229b1b6c23ff8953d663c4cbb519717e323a0a84",
    name: "Bloktopia",
    symbol: "BLOK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18819/thumb/logo-bholdus-6.png?1633518105",
  },
  {
    chainId: 137,
    address: "0x64afdf9e28946419e325d801fb3053d8b8ffdc23",
    name: "Meeb Master",
    symbol: "MEEB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17312/thumb/logo_-_2021-07-26T144950.172.png?1627282207",
  },
  {
    chainId: 137,
    address: "0x9e25126ebcd57c8eb6eb6c2ffc67810d365cfc3e",
    name: "Optimus OPT2",
    symbol: "OPT2",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27187/thumb/optimus-logo-03.png?1662434333",
  },
  {
    chainId: 137,
    address: "0xd9e838dd60c8ea1e7dd4e670913323bb87db112c",
    name: "Ecowatt",
    symbol: "EWT",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/24407/thumb/28382.jpeg?1647530872",
  },
  {
    chainId: 137,
    address: "0x3ad707da309f3845cd602059901e39c4dcd66473",
    name: "Index Coop   ETH 2x Flexible Leverage I",
    symbol: "ETH2X-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21183/thumb/ETH2x-FLO_token_logo.jpg?1638512434",
  },
  {
    chainId: 137,
    address: "0xc250e9987a032acac293d838726c511e6e1c029d",
    name: "OtterClam",
    symbol: "CLAM",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/20670/thumb/clam.png?1637548092",
  },
  {
    chainId: 137,
    address: "0xaa3717090cddc9b227e49d0d84a28ac0a996e6ff",
    name: "Permission Coin",
    symbol: "ASK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12521/thumb/rjQjTU3c_400x400.jpg?1600383907",
  },
  {
    chainId: 137,
    address: "0xcf630283e8ff2e30c29093bc8aa58cadd8613039",
    name: "Optimus OPT3",
    symbol: "OPT3",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27817/thumb/optimus-logo-03.png?1665913885",
  },
  {
    chainId: 137,
    address: "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
    name: "Revolt 2 Earn",
    symbol: "RVLT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26360/thumb/revolt2earn_32.png?1657595833",
  },
  {
    chainId: 137,
    address: "0xb5c064f955d8e7f38fe0460c556a72987494ee17",
    name: "Quickswap",
    symbol: "QUICK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25393/thumb/quickswap.jpg?1651680141",
  },
  {
    chainId: 137,
    address: "0xd6ca869a4ec9ed2c7e618062cdc45306d8dbbc14",
    name: "BTC 2x Flexible Leverage Index  Polygon",
    symbol: "BTC2X-FLI-P",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24179/thumb/Copy_of_BTC2x-FLI_token_logo.png?1646783823",
  },
  {
    chainId: 137,
    address: "0x972999c58bbce63a2e398d4ed3bde414b8349eb3",
    name: "Purpose",
    symbol: "PRPS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2539/thumb/purpose.png?1547036654",
  },
  {
    chainId: 137,
    address: "0x9cd552551ec130b50c1421649c8d11e76ac821e1",
    name: "Crypto Volatility",
    symbol: "CVOL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24008/thumb/govi-dao.03ef3083.png?1646029661",
  },
  {
    chainId: 137,
    address: "0xd838290e877e0188a4a44700463419ed96c16107",
    name: "Toucan Protocol  Nature Carbon Tonne",
    symbol: "NCT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24484/thumb/NCT-removebg-preview.png?1647836439",
  },
  {
    chainId: 137,
    address: "0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb",
    name: "Rebel Bots",
    symbol: "RBLS",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/24094/thumb/logo-footer-356.88b37f33.png?1646364881",
  },
  {
    chainId: 137,
    address: "0x255707b70bf90aa112006e1b07b9aea6de021424",
    name: "TETU",
    symbol: "TETU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17882/thumb/gradient_icon_926.png?1629707907",
  },
  {
    chainId: 137,
    address: "0x839f1a22a59eaaf26c85958712ab32f80fea23d9",
    name: "Axion",
    symbol: "AXN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13110/thumb/AXION.png?1634887383",
  },
  {
    chainId: 137,
    address: "0x30ea765d4dda26e0f89e1b23a7c7b2526b7d29ec",
    name: "PolyPad",
    symbol: "POLYPAD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24905/thumb/BXApUK87_400x400.png?1649335541",
  },
  {
    chainId: 137,
    address: "0x7e7737c40878e720b32e7bc9cd096259f876d69f",
    name: "Catheon Gaming",
    symbol: "CATHEON",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/28052/thumb/_removal.ai__tmp-635fe0271d6a3%281%29.png?1667286253",
  },
  {
    chainId: 137,
    address: "0x614af88dac8bbffc5a167bb79ff3f5e0769f1a3f",
    name: "Realms of Ethernity",
    symbol: "RETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24842/thumb/reth.png?1651909371",
  },
  {
    chainId: 137,
    address: "0x8343091f2499fd4b6174a46d067a920a3b851ff9",
    name: "Jarvis Synthetic Japanese Yen",
    symbol: "JJPY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24327/thumb/jJPY.png?1647357906",
  },
  {
    chainId: 137,
    address: "0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591",
    name: "Proxy",
    symbol: "PRXY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17442/thumb/Proxy_logo_200.png?1628337184",
  },
  {
    chainId: 137,
    address: "0x1adcef5c780d8895ac77e6ee9239b4b3ecb76da2",
    name: "DragonMaster Totem",
    symbol: "TOTEM",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/25056/thumb/C6_miUEU_400x400.jpg?1649939854",
  },
  {
    chainId: 137,
    address: "0x262b8aa7542004f023b0eb02bc6b96350a02b728",
    name: "Sway Social",
    symbol: "SWAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18915/thumb/sway.png?1638944259",
  },
  {
    chainId: 137,
    address: "0x6749441fdc8650b5b5a854ed255c82ef361f1596",
    name: "Lucha",
    symbol: "LUCHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22794/thumb/lucha.png?1642581523",
  },
  {
    chainId: 137,
    address: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f",
    name: "USD ",
    symbol: "USD+",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/25757/thumb/USD__logo.png?1653519267",
  },
  {
    chainId: 137,
    address: "0x76bf0c28e604cc3fe9967c83b3c3f31c213cfe64",
    name: "Crystl Finance",
    symbol: "CRYSTL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17023/thumb/CRYSTL_Rebrand_Logo.png?1651745246",
  },
  {
    chainId: 137,
    address: "0x411bc96881a62572ff33c9d8ce60df99e3d96cd8",
    name: "Mars Token",
    symbol: "MRST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27230/thumb/MRST.png?1669106886",
  },
  {
    chainId: 137,
    address: "0x4e78011ce80ee02d2c3e649fb657e45898257815",
    name: "Klima DAO",
    symbol: "KLIMA",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/19169/thumb/klima-logo.png?1634606729",
  },
  {
    chainId: 137,
    address: "0x71eeba415a523f5c952cc2f06361d5443545ad28",
    name: "XDAO",
    symbol: "XDAO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27363/thumb/XDAO_Token_img.png?1665738325",
  },
  {
    chainId: 137,
    address: "0x709d140925272ee606825781b1bef7be6b1412cd",
    name: "Crypto Global United",
    symbol: "CGU",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/20751/thumb/2022_CGU-MG_RGB.png?1666606977",
  },
  {
    chainId: 137,
    address: "0x000000ef379ee7f4c051f4b9af901a9219d9ec5c",
    name: "Infam",
    symbol: "INF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21175/thumb/Avatar_32.png?1669265769",
  },
  {
    chainId: 137,
    address: "0x306e974624511e3937f37e551c5736f1b2ad21eb",
    name: "Gitshock Finance",
    symbol: "GTFX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28033/thumb/Logo_Gitshock_HD.png?1667117754",
  },
  {
    chainId: 137,
    address: "0x8497842420cfdbc97896c2353d75d89fc8d5be5d",
    name: "VersaGames",
    symbol: "VERSA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25491/thumb/versa_token_96_96.png?1652074785",
  },
  {
    chainId: 137,
    address: "0x9bedce29f79076b21dd04958a9fd4b22f63fd86d",
    name: "Freebie Life Finance",
    symbol: "FRB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26262/thumb/Logo_%28200x200%29.png?1656942812",
  },
  {
    chainId: 137,
    address: "0xe0bceef36f3a6efdd5eebfacd591423f8549b9d5",
    name: "Defactor",
    symbol: "FACTR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19201/thumb/jFLSu4U9_400x400.png?1650437050",
  },
  {
    chainId: 137,
    address: "0x476718ea98525f6eeba3689b321e709522ae0930",
    name: "Morphswap",
    symbol: "MS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28114/thumb/mslogo200.png?1668056773",
  },
  {
    chainId: 137,
    address: "0xb9585ec9d4c97ad9ded7250bb9a199fe8eed0eca",
    name: "WHALE",
    symbol: "WHALE",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/11797/thumb/WHALE.png?1595004706",
  },
  {
    chainId: 137,
    address: "0xed755dba6ec1eb520076cec051a582a6d81a8253",
    name: "Ultimate Champions",
    symbol: "CHAMP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28091/thumb/champ.png?1667472074",
  },
  {
    chainId: 137,
    address: "0xdc7858415244b20c903e0cd857ac58b7225f046f",
    name: "TLChain",
    symbol: "TLC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28177/thumb/tlc.png?1668250171",
  },
  {
    chainId: 137,
    address: "0x4ec203dd0699fac6adaf483cdd2519bc05d2c573",
    name: "Cobak",
    symbol: "CBK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13459/thumb/cbk-128-128.png?1608760936",
  },
  {
    chainId: 137,
    address: "0xbbfe0b60de96a189bf09079de86a2db7bf0c7883",
    name: "Lunr",
    symbol: "LUNR",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/19256/thumb/lunr.png?1639975807",
  },
  {
    chainId: 137,
    address: "0x8bb30e0e67b11b978a5040144c410e1ccddcba30",
    name: "Zus",
    symbol: "ZCN",
    decimals: 10,
    logoURI:
      "https://assets.coingecko.com/coins/images/4934/thumb/200x200_transparent.png?1669366739",
  },
  {
    chainId: 137,
    address: "0xe3627374ac4baf5375e79251b0af23afc450fc0e",
    name: "Waru",
    symbol: "WARU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26059/thumb/logo.94e2b55c.png?1658824826",
  },
  {
    chainId: 137,
    address: "0xc0a1adce1c62daedf1b5f07b31266090bc5cc6d2",
    name: "ONUS",
    symbol: "ONUS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24599/thumb/ONUS_200.png?1669452755",
  },
  {
    chainId: 137,
    address: "0xf328b73b6c685831f238c30a23fc19140cb4d8fc",
    name: "Across Protocol",
    symbol: "ACX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28161/thumb/across-200x200.png?1668168201",
  },
  {
    chainId: 137,
    address: "0xfcbb00df1d663eee58123946a30ab2138bf9eb2a",
    name: "ClayStack Staked MATIC",
    symbol: "CSMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/28352/thumb/csMatic.png?1669771887",
  },
  {
    chainId: 137,
    address: "0x81382e9693de2afc33f69b70a6c12ca9b3a73f47",
    name: "DOSE",
    symbol: "DOSE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18847/thumb/dose.PNG?1633590548",
  },
  {
    chainId: 137,
    address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
    name: "Binance USD",
    symbol: "BUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png?1568947766",
  },
  {
    chainId: 137,
    address: "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
    name: "Hop Protocol",
    symbol: "HOP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25445/thumb/hop.png?1665541677",
  },
  {
    chainId: 137,
    address: "0xe342ebb6a56cd3dbf0fe01a447fe367b9290ecf8",
    name: "The Standard Token",
    symbol: "TST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20598/thumb/TheStandard-logo_variation-01.png?1668676004",
  },
  {
    chainId: 137,
    address: "0x28acca4ed2f6186c3d93e20e29e6e6a9af656341",
    name: "Entropyfi",
    symbol: "ERP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19633/thumb/erp.PNG?1635715161",
  },
  {
    chainId: 137,
    address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    name: "Aavegotchi",
    symbol: "GHST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12467/thumb/ghst_200.png?1600750321",
  },
  {
    chainId: 137,
    address: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    name: "Quickswap  OLD ",
    symbol: "QUICK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13970/thumb/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659",
  },
  {
    chainId: 137,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
  },
  {
    chainId: 137,
    address: "0x8d1566569d5b695d44a9a234540f68d393cdc40d",
    name: "GameCredits",
    symbol: "GAME",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/193/thumb/XlQmXoU.png?1595304945",
  },
  {
    chainId: 137,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
  },
  {
    chainId: 137,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    name: "Dai",
    symbol: "DAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734",
  },
  {
    chainId: 137,
    address: "0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79",
    name: "SX Network",
    symbol: "SX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13779/thumb/sx.png?1636034699",
  },
  {
    chainId: 137,
    address: "0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce",
    name: "IG Gold",
    symbol: "IGG",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/7697/thumb/N7aEdYrY_400x400.png?1561587437",
  },
  {
    chainId: 137,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    name: "Tether",
    symbol: "USDT",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663",
  },
  {
    chainId: 137,
    address: "0x72d6066f486bd0052eefb9114b66ae40e0a6031a",
    name: "WazirX",
    symbol: "WRX",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/10547/thumb/WazirX.png?1580834330",
  },
  {
    chainId: 137,
    address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    name: "Chainlink",
    symbol: "LINK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700",
  },
  {
    chainId: 137,
    address: "0x0000000000000000000000000000000000001010",
    name: "Polygon",
    symbol: "MATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
  },
  {
    chainId: 137,
    address: "0xaf24765f631c8830b5528b57002241ee7eef1c14",
    name: "IOI",
    symbol: "IOI",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/15952/thumb/IOI_new_logo.png?1636797701",
  },
  {
    chainId: 137,
    address: "0xd55fce7cdab84d84f2ef3f99816d765a2a94a509",
    name: "Chain Games",
    symbol: "CHAIN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12257/thumb/chain-logo-centered-500x500.png?1599617244",
  },
  {
    chainId: 137,
    address: "0x2a93172c8dccbfbc60a39d56183b7279a2f647b4",
    name: "Decentral Games  Old ",
    symbol: "DG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13267/thumb/%28Old%29_DG.png?1639209538",
  },
  {
    chainId: 137,
    address: "0x2c92a8a41f4b806a6f6f1f7c9d9dec78dcd8c18e",
    name: "99Starz",
    symbol: "STZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21467/thumb/stz.png?1639651623",
  },
  {
    chainId: 137,
    address: "0x7fbc10850cae055b27039af31bd258430e714c62",
    name: "Unibright",
    symbol: "UBT",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/2707/thumb/UnibrightLogo_colorful_500x500_preview.png?1547036916",
  },
  {
    chainId: 137,
    address: "0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c",
    name: "Fear",
    symbol: "FEAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15825/thumb/fear-logo-400-400.png?1625552865",
  },
  {
    chainId: 137,
    address: "0xd28449bb9bb659725accad52947677cce3719fd7",
    name: "Dark Matter",
    symbol: "DMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14223/thumb/dmt.jpg?1615089067",
  },
  {
    chainId: 137,
    address: "0x46f48fbdedaa6f5500993bede9539ef85f4bee8e",
    name: "Arianee",
    symbol: "ARIA20",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/5054/thumb/Aria_Logo_256.png?1610097866",
  },
  {
    chainId: 137,
    address: "0xecf8f2fa183b1c4d2a269bf98a54fce86c812d3e",
    name: "CyberFi",
    symbol: "CFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13112/thumb/cyberfi_logo.jpeg?1605283367",
  },
  {
    chainId: 137,
    address: "0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff",
    name: "iFARM",
    symbol: "IFARM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14472/thumb/ifarm.png?1616389133",
  },
  {
    chainId: 137,
    address: "0x7c28f627ea3aec8b882b51eb1935f66e5b875714",
    name: "MurAll",
    symbol: "PAINT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14103/thumb/paint_logo_200x200.png?1614325640",
  },
  {
    chainId: 137,
    address: "0x521cddc0cba84f14c69c1e99249f781aa73ee0bc",
    name: "Mover",
    symbol: "MOVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13719/thumb/o0KIvs7T_400x400.jpg?1617672818",
  },
  {
    chainId: 137,
    address: "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
    name: "Must",
    symbol: "MUST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13688/thumb/must_logo.png?1610949645",
  },
  {
    chainId: 137,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744",
  },
  {
    chainId: 137,
    address: "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
    name: "Stake DAO",
    symbol: "SDT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13724/thumb/stakedao_logo.jpg?1611195011",
  },
  {
    chainId: 137,
    address: "0x52ede6bba83b7b4ba1d738df0df713d6a2036b71",
    name: "0xMonero",
    symbol: "0XMR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11035/thumb/0xmnr.PNG?1587357680",
  },
  {
    chainId: 137,
    address: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
    name: "Frax Share",
    symbol: "FXS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13423/thumb/ethCanonicalFXS.png?1669276861",
  },
  {
    chainId: 137,
    address: "0x2727ab1c2d22170abc9b595177b2d5c6e1ab7b7b",
    name: "Cartesi",
    symbol: "CTSI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11038/thumb/cartesi.png?1592288021",
  },
  {
    chainId: 137,
    address: "0xf153eff70dc0bf3b085134928daeea248d9b30d0",
    name: "xMARK",
    symbol: "XMARK",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/14188/thumb/omPQ9-nF_400x400.jpg?1614830988",
  },
  {
    chainId: 137,
    address: "0x1379e8886a944d2d9d440b3d88df536aea08d9f3",
    name: "Mysterium",
    symbol: "MYST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/757/thumb/mysterium.png?1547034503",
  },
  {
    chainId: 137,
    address: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    name: "Celsius Network",
    symbol: "CEL",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png?1609598753",
  },
  {
    chainId: 137,
    address: "0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c",
    name: "HEX",
    symbol: "HEX",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/10103/thumb/HEX-logo.png?1575942673",
  },
  {
    chainId: 137,
    address: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    name: "Decentraland",
    symbol: "MANA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
  },
  {
    chainId: 137,
    address: "0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea",
    name: "MANTRA",
    symbol: "OM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12151/thumb/OM_Token.png?1666056782",
  },
  {
    chainId: 137,
    address: "0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e",
    name: "Pepedex",
    symbol: "PPDEX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13022/thumb/output-onlinepngtools-1.png?1604720841",
  },
  {
    chainId: 137,
    address: "0x3809dcdd5dde24b37abe64a5a339784c3323c44f",
    name: "Trustswap",
    symbol: "SWAP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11795/thumb/Untitled_design-removebg-preview.png?1626926355",
  },
  {
    chainId: 137,
    address: "0x034b2090b579228482520c589dbd397c53fc51cc",
    name: "APY vision",
    symbol: "VISION",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13288/thumb/apyvisionlogo200circle.png?1607059042",
  },
  {
    chainId: 137,
    address: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
    name: "yearn finance",
    symbol: "YFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
  },
  {
    chainId: 137,
    address: "0xe86e8beb7340659dddce61727e500e3a5ad75a90",
    name: "Zero Utility",
    symbol: "ZUT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12706/thumb/logo.png?1605007113",
  },
  {
    chainId: 137,
    address: "0x033d942a6b495c4071083f4cde1f17e986fe856c",
    name: "AGA",
    symbol: "AGA",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/12180/thumb/aga-logo.png?1597937396",
  },
  {
    chainId: 137,
    address: "0xf84bd51eab957c2e7b7d646a3427c5a50848281d",
    name: "AGA Rewards",
    symbol: "AGAR",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/14207/thumb/AR256.png?1614931200",
  },
  {
    chainId: 137,
    address: "0x6c3b2f402cd7d22ae2c319b9d2f16f57927a4a17",
    name: "KROWN",
    symbol: "KRW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16530/thumb/KRW_token_logo_200x200.png?1624343058",
  },
  {
    chainId: 137,
    address: "0x5f99acf13caff815dd9cb4a415c0fb34e9f4545b",
    name: "Teaswap Art",
    symbol: "TSA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17826/thumb/tsa.PNG?1629358290",
  },
  {
    chainId: 137,
    address: "0x34c1b299a74588d6abdc1b85a53345a48428a521",
    name: "EasyFi V2",
    symbol: "EZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12742/thumb/Logo_Icon.png?1624471467",
  },
  {
    chainId: 137,
    address: "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc",
    name: "BTU Protocol",
    symbol: "BTU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3697/thumb/btuprotocol.jpeg?1549597021",
  },
  {
    chainId: 137,
    address: "0xe82808eaa78339b06a691fd92e1be79671cad8d3",
    name: "PlotX",
    symbol: "PLOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12795/thumb/PlotX.png?1611109969",
  },
  {
    chainId: 137,
    address: "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
    name: "Telcoin",
    symbol: "TEL",
    decimals: 2,
    logoURI:
      "https://assets.coingecko.com/coins/images/1899/thumb/tel.png?1547036203",
  },
  {
    chainId: 137,
    address: "0xb9638272ad6998708de56bbc0a290a1de534a578",
    name: "IQ",
    symbol: "IQ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/5010/thumb/YAIS3fUh.png?1626267646",
  },
  {
    chainId: 137,
    address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    name: "Aave",
    symbol: "AAVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
  },
  {
    chainId: 137,
    address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    name: "Sushi",
    symbol: "SUSHI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
  },
  {
    chainId: 137,
    address: "0x47cac8a868e301afb89b52ac31665858938e96b5",
    name: "Footie Plus",
    symbol: "FOOTIE",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/17628/thumb/footie.jpeg?1628683039",
  },
  {
    chainId: 137,
    address: "0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97",
    name: "Dfyn Network",
    symbol: "DFYN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15368/thumb/SgqhfWz4_400x400_%281%29.jpg?1620666919",
  },
  {
    chainId: 137,
    address: "0x4fdce518fe527439fe76883e6b51a1c522b61b7c",
    name: "Coreto",
    symbol: "COR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12856/thumb/COR.png?1620210966",
  },
  {
    chainId: 137,
    address: "0x5b4cf2c120a9702225814e18543ee658c5f8631e",
    name: "UniLend Finance",
    symbol: "UFT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12819/thumb/UniLend_Finance_logo_PNG.png?1602748658",
  },
  {
    chainId: 137,
    address: "0x6109cb051c5c64093830121ed76272ab04bbdd7c",
    name: "Prosper",
    symbol: "PROS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13668/thumb/heD6cg22l3sF5VgPh4G1xC6lnKEWXJif-jbaqUpv8CDP6jbWaqn9UjBdkXWNrw1CewaQOxb8zXRdNeNJWWiUDjfsEl_d7E3bPLg4cFoilQF5TGKHfWyJlnpm3UYc9ytvRvOjxOevMuiu8-lusnNoOcwgsJpMkYWHqe322GAxLt0_30kFMVAcjEDUrOlkK6hUYi0m9P433mvNlOm.jpg?1610671732",
  },
  {
    chainId: 137,
    address: "0x5b6ab5078bd2bbf1a215fffba16a94b7df7f639d",
    name: "PieDAO DEFI  ",
    symbol: "DEFI++",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13304/thumb/piedao__.png?1607322674",
  },
  {
    chainId: 137,
    address: "0x60ac2e84078ce30cbc68e3d7b18bcf613271ce6b",
    name: "Aloha",
    symbol: "ALOHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14048/thumb/aloha.png?1615527835",
  },
  {
    chainId: 137,
    address: "0x3c5d1617c30ba71972add4b0c9a6b9848f2afeed",
    name: "DAO1",
    symbol: "DAO1",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16193/thumb/dao1.PNG?1623276970",
  },
  {
    chainId: 137,
    address: "0xd99bafe5031cc8b345cb2e8c80135991f12d7130",
    name: "Ferrum Network",
    symbol: "FRM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8251/thumb/FRM.png?1658819429",
  },
  {
    chainId: 137,
    address: "0xede1b77c0ccc45bfa949636757cd2ca7ef30137f",
    name: "Wrapped Filecoin",
    symbol: "WFIL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13238/thumb/WFIL.png?1623827165",
  },
  {
    chainId: 137,
    address: "0x2fe8733dcb25bfbba79292294347415417510067",
    name: "Exeedme",
    symbol: "XED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13518/thumb/exeedme.png?1610669597",
  },
  {
    chainId: 137,
    address: "0xa5eb60ca85898f8b26e18ff7c7e43623ccba772c",
    name: "CosmicSwap",
    symbol: "COSMIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16197/thumb/logo_-_2021-06-10T084120.309.png?1623285688",
  },
  {
    chainId: 137,
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    name: "WETH",
    symbol: "WETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295",
  },
  {
    chainId: 137,
    address: "0x42dbbd5ae373fea2fc320f62d44c058522bb3758",
    name: "Memecoin",
    symbol: "MEM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16370/thumb/mem_gold_200x200_copy.png?1623821100",
  },
  {
    chainId: 137,
    address: "0x72a5a58f79ffc2102227b92faeba93b169a3a3f1",
    name: "Finance Vote",
    symbol: "FVT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13181/thumb/finance.png?1606015010",
  },
  {
    chainId: 137,
    address: "0xd1e6354fb05bf72a8909266203dab80947dceccf",
    name: "Cryption Network",
    symbol: "CNT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16171/thumb/Cryption_Logo_Gradient_White_Text.png?1623191284",
  },
  {
    chainId: 137,
    address: "0xf629712180bef6f4c569b704e03d0acbe276eb6d",
    name: "Wrapped Statera",
    symbol: "WSTA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13599/thumb/wsta_logo.png?1610011862",
  },
  {
    chainId: 137,
    address: "0xa6b37fc85d870711c56fbcb8afe2f8db049ae774",
    name: "Pillar",
    symbol: "PLR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/809/thumb/v2logo-1.png?1624906282",
  },
  {
    chainId: 137,
    address: "0x428ac1de3fc08c0f3a47745c964f7d677716981f",
    name: "Ibiza",
    symbol: "IBZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19349/thumb/AZHnAHiY_400x400.jpg?1635127261",
  },
  {
    chainId: 137,
    address: "0xfe6a2342f7c5d234e8496df12c468be17e0c181f",
    name: "DefiVille Island",
    symbol: "ISLA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14471/thumb/256.png?1616384288",
  },
  {
    chainId: 137,
    address: "0xccbe9b810d6574701d324fd6dbe0a1b68f9d5bf7",
    name: "Stacker Ventures",
    symbol: "STACK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14218/thumb/stack.jpg?1615000614",
  },
  {
    chainId: 137,
    address: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png?1592792958",
  },
  {
    chainId: 137,
    address: "0x6aca77cf3bab0c4e8210a09b57b07854a995289a",
    name: "Meeds DAO",
    symbol: "MEED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24281/thumb/s-YfFWYu_400x400.png?1647218173",
  },
  {
    chainId: 137,
    address: "0x9de41aff9f55219d5bf4359f167d1d0c772a396d",
    name: "CAD Coin",
    symbol: "CADC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14149/thumb/cadc_2.png?1614666625",
  },
  {
    chainId: 137,
    address: "0x908435624fc23130fda2d07b10c91ca2b6a57aba",
    name: "CryptoPunt",
    symbol: "PUN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19230/thumb/cryptopunt.PNG?1634767637",
  },
  {
    chainId: 137,
    address: "0x2e4b0fb46a46c90cb410fe676f24e466753b469f",
    name: "Umbria Network",
    symbol: "UMBR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14712/thumb/RX7VJg6.png?1617891954",
  },
  {
    chainId: 137,
    address: "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c",
    name: "Kyber Network Crystal",
    symbol: "KNC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14899/thumb/RwdVsGcw_400x400.jpg?1618923851",
  },
  {
    chainId: 137,
    address: "0xedd6ca8a4202d4a36611e2fff109648c4863ae19",
    name: "MahaDAO",
    symbol: "MAHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13404/thumb/MAHA_Token.png?1625651604",
  },
  {
    chainId: 137,
    address: "0xe3ab61371ecc88534c522922a026f2296116c109",
    name: "Mochi Market",
    symbol: "MOMA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14993/thumb/mochi.PNG?1619390399",
  },
  {
    chainId: 137,
    address: "0x83a6da342099835bcaa9c219dd76a5033c837de5",
    name: "Basis Share",
    symbol: "BAS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13251/thumb/BAS.png?1613231139",
  },
  {
    chainId: 137,
    address: "0x08158a6b5d4018340387d1a302f882e98a8bc5b4",
    name: "Plasma Finance",
    symbol: "PPAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13340/thumb/Hi9sEGAD.png?1607586849",
  },
  {
    chainId: 137,
    address: "0xf501dd45a1198c2e1b5aef5314a68b9006d842e0",
    name: "mStable Governance  Meta",
    symbol: "MTA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11846/thumb/mStable.png?1594950533",
  },
  {
    chainId: 137,
    address: "0x957d1ad5214468332c5e6c00305a25116f9a46bb",
    name: "Syntropy",
    symbol: "NOIA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3269/thumb/Component_1.png?1608275724",
  },
  {
    chainId: 137,
    address: "0x696c2d3c711d5727c3686672f411583faedaa29f",
    name: "Vmates",
    symbol: "MATE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21931/thumb/vates.PNG?1640300141",
  },
  {
    chainId: 137,
    address: "0x6c0ab120dbd11ba701aff6748568311668f63fe0",
    name: "APWine",
    symbol: "APW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15597/thumb/ApWine.png?1621340387",
  },
  {
    chainId: 137,
    address: "0x7075cab6bcca06613e2d071bd918d1a0241379e2",
    name: "Gains Farm",
    symbol: "GFARM2",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13703/thumb/gfarm_v2.png?1611035398",
  },
  {
    chainId: 137,
    address: "0xbe5cf150e1ff59ca7f2499eaa13bfc40aae70e78",
    name: "Glitch Protocol",
    symbol: "GLCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13712/thumb/glitch_logo.jpeg?1611100011",
  },
  {
    chainId: 137,
    address: "0x6b24e2771d6a18ba38c32f9b616eb1cd7948745f",
    name: "SynchroCoin",
    symbol: "SYC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/1469/thumb/ud643DVg.png?1621828021",
  },
  {
    chainId: 137,
    address: "0x175bdc4e52eecb675b86fc4c9a3ea3f80adbb610",
    name: "Havens Nook",
    symbol: "HXN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14876/thumb/havennook.PNG?1618881827",
  },
  {
    chainId: 137,
    address: "0xde799636af0d8d65a17aaa83b66cbbe9b185eb01",
    name: "Planet Inverse",
    symbol: "XIV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14231/thumb/photo_2021-06-07_22-10-41.jpg?1623075271",
  },
  {
    chainId: 137,
    address: "0xf88332547c680f755481bf489d890426248bb275",
    name: "inSure DeFi",
    symbol: "SURE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/10354/thumb/logo-grey-circle.png?1614910406",
  },
  {
    chainId: 137,
    address: "0x47536f17f4ff30e64a96a7555826b8f9e66ec468",
    name: "Beluga fi",
    symbol: "BELUGA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13790/thumb/brand-logo-v2.23e5d279.png?1624906164",
  },
  {
    chainId: 137,
    address: "0x3ecdeb8fc5023839b92b0c293d049d61069e02b1",
    name: "GENX",
    symbol: "GENX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16747/thumb/logo-pic.png?1624873606",
  },
  {
    chainId: 137,
    address: "0x6ccf12b480a99c54b23647c995f4525d544a7e72",
    name: "Starter xyz",
    symbol: "START",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14301/thumb/logo_poly_sym.png?1624893386",
  },
  {
    chainId: 137,
    address: "0x6ddb31002abc64e1479fc439692f7ea061e78165",
    name: "Furucombo",
    symbol: "COMBO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13629/thumb/COMBO_token_ol.png?1610701537",
  },
  {
    chainId: 137,
    address: "0xd0660cd418a64a1d44e9214ad8e459324d8157f1",
    name: "Woofy",
    symbol: "WOOFY",
    decimals: 12,
    logoURI:
      "https://assets.coingecko.com/coins/images/15410/thumb/woofy.png?1622566328",
  },
  {
    chainId: 137,
    address: "0xa7305ae84519ff8be02484cda45834c4e7d13dd6",
    name: "UniFarm",
    symbol: "UFARM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15247/thumb/ufarm.jpeg?1620218765",
  },
  {
    chainId: 137,
    address: "0x172370d5cd63279efa6d502dab29171933a610af",
    name: "Curve DAO",
    symbol: "CRV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png?1597369484",
  },
  {
    chainId: 137,
    address: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
    name: "Synthetix Network",
    symbol: "SNX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png?1598631139",
  },
  {
    chainId: 137,
    address: "0xfed16c746cb5bfed009730f9e3e6a673006105c7",
    name: "Digital Reserve Currency",
    symbol: "DRC",
    decimals: 0,
    logoURI:
      "https://assets.coingecko.com/coins/images/12802/thumb/DRC_Logo.jpg?1654229818",
  },
  {
    chainId: 137,
    address: "0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd",
    name: "Yield App",
    symbol: "YLD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13365/thumb/Google_Play_Store_Icon.png?1657012535",
  },
  {
    chainId: 137,
    address: "0xa0e390e9cea0d0e8cd40048ced9fa9ea10d71639",
    name: "DSLA Protocol",
    symbol: "DSLA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/6694/thumb/dsla_logo-squared_200x200.png?1569571063",
  },
  {
    chainId: 137,
    address: "0xb565cf70613ca464d68427106af80c67a8e4b801",
    name: "YVS Finance",
    symbol: "YVS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13471/thumb/cu0LSzE.png?1608852718",
  },
  {
    chainId: 137,
    address: "0x4e9a46ea6a22f3894abee2302ad42fd3b69e21e2",
    name: "Binance Smart Chain Girl",
    symbol: "BSCGIRL",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/17271/thumb/icon_200px_16bit.png?1627005622",
  },
  {
    chainId: 137,
    address: "0x692597b009d13c4049a947cab2239b7d6517875f",
    name: "Wrapped USTC",
    symbol: "USTC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15462/thumb/ust.png?1620910058",
  },
  {
    chainId: 137,
    address: "0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7",
    name: "Mask Network",
    symbol: "MASK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14051/thumb/Mask_Network.jpg?1614050316",
  },
  {
    chainId: 137,
    address: "0x9c6bfedc14b5c23e3900889436edca7805170f01",
    name: "Phoenix Finance",
    symbol: "PHX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17675/thumb/phx_logo.png?1628832432",
  },
  {
    chainId: 137,
    address: "0xa8fcee762642f156b5d757b6fabc36e06b6d4a1a",
    name: "Aluna",
    symbol: "ALN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14379/thumb/uaLoLU8c_400x400_%281%29.png?1627873106",
  },
  {
    chainId: 137,
    address: "0x70c006878a5a50ed185ac4c87d837633923de296",
    name: "REVV",
    symbol: "REVV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12373/thumb/REVV_TOKEN_Refined_2021_%281%29.png?1627652390",
  },
  {
    chainId: 137,
    address: "0xee800b277a96b0f490a1a732e1d6395fad960a26",
    name: "ARPA",
    symbol: "ARPA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8506/thumb/9u0a23XY_400x400.jpg?1559027357",
  },
  {
    chainId: 137,
    address: "0x855d4248672a1fce482165e8dbe1207b94b1968a",
    name: "WOWswap",
    symbol: "WOW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14101/thumb/Group-423.png?1614317472",
  },
  {
    chainId: 137,
    address: "0xab5f7a0e20b0d056aed4aa4528c78da45be7308b",
    name: "Obyte",
    symbol: "GBYTE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/561/thumb/byteball.png?1547564361",
  },
  {
    chainId: 137,
    address: "0xa55870278d6389ec5b524553d03c04f5677c061e",
    name: "XCAD Network",
    symbol: "XCAD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15857/thumb/logoWhiteX.jpg?1666230966",
  },
  {
    chainId: 137,
    address: "0xdcdc86a38d1dda13eeb346eebf34d0148c8197d9",
    name: "Grow",
    symbol: "GROW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16049/thumb/grow-logo-200x200.png?1622691274",
  },
  {
    chainId: 137,
    address: "0x904371845bc56dcbbcf0225ef84a669b2fd6bd0d",
    name: "Relay Chain",
    symbol: "RELAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17816/thumb/relay-logo-200.png?1629339288",
  },
  {
    chainId: 137,
    address: "0x692ac1e363ae34b6b489148152b12e2785a3d8d6",
    name: "Polytrade",
    symbol: "TRADE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16416/thumb/Logo_colored_200.png?1623979654",
  },
  {
    chainId: 137,
    address: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    name: "The Graph",
    symbol: "GRT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
  },
  {
    chainId: 137,
    address: "0x5c7f7fe4766fe8f0fa9b41e2e4194d939488ff1c",
    name: "Doki Doki",
    symbol: "DOKI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12759/thumb/doki_logo.png?1602338064",
  },
  {
    chainId: 137,
    address: "0xb75bbd79985a8092b05224f62d7fed25924b075d",
    name: "Datamine",
    symbol: "DAM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11695/thumb/qxsFH8W.png?1592880463",
  },
  {
    chainId: 137,
    address: "0x3cef98bb43d732e2f285ee605a8158cde967d219",
    name: "Basic Attention",
    symbol: "BAT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png?1547034427",
  },
  {
    chainId: 137,
    address: "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    name: "1inch",
    symbol: "1INCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
  },
  {
    chainId: 137,
    address: "0xcfb54a6d2da14abecd231174fc5735b4436965d8",
    name: "Cyclone Protocol",
    symbol: "CYC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14065/thumb/b3_DFjFp_400x400.jpg?1614128740",
  },
  {
    chainId: 137,
    address: "0x1c0a798b5a5273a9e54028eb1524fd337b24145f",
    name: "Loser Coin",
    symbol: "LOWB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15378/thumb/loser.PNG?1620693920",
  },
  {
    chainId: 137,
    address: "0x11a819beb0aa3327e39f52f90d65cc9bca499f33",
    name: "Scaleswap",
    symbol: "SCA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16360/thumb/thumbnail_1170823958_vertical_logo_lateral_radiance.png?1623810516",
  },
  {
    chainId: 137,
    address: "0x1e42edbe5376e717c1b22904c59e406426e8173f",
    name: "Surf Finance",
    symbol: "SURF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12982/thumb/surf_200x200.png?1604050261",
  },
  {
    chainId: 137,
    address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
    name: "renBTC",
    symbol: "RENBTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/11370/thumb/Bitcoin.jpg?1628072791",
  },
  {
    chainId: 137,
    address: "0xf480f38c366daac4305dc484b2ad7a496ff00cea",
    name: "GTON CAPITAL",
    symbol: "GTON",
    decimals: 15,
    logoURI:
      "https://assets.coingecko.com/coins/images/15728/thumb/GC_logo_200x200.png?1642669327",
  },
  {
    chainId: 137,
    address: "0x8765f05adce126d70bcdf1b0a48db573316662eb",
    name: "PlayDapp",
    symbol: "PLA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14316/thumb/54023228.png?1615366911",
  },
  {
    chainId: 137,
    address: "0xad5dc12e88c6534eea8cfe2265851d9d4a1472ad",
    name: "Falconswap",
    symbol: "FSW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12256/thumb/falconswap.png?1598534184",
  },
  {
    chainId: 137,
    address: "0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57",
    name: "Wrapped Terra Classic",
    symbol: "LUNC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13628/thumb/wluna.png?1610448334",
  },
  {
    chainId: 137,
    address: "0x2ce13e4199443fdfff531abb30c9b6594446bbc7",
    name: "RocketX exchange",
    symbol: "RVF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14728/thumb/avatar-correct-size-official.png?1668391022",
  },
  {
    chainId: 137,
    address: "0x85955046df4668e1dd369d2de9f3aeb98dd2a369",
    name: "DeFi Pulse Index",
    symbol: "DPI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12465/thumb/defi_pulse_index_set.png?1600051053",
  },
  {
    chainId: 137,
    address: "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
    name: "Router Protocol",
    symbol: "ROUTE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13709/thumb/route_token_200x200-19.png?1611057698",
  },
  {
    chainId: 137,
    address: "0xf521d590fb1e0b432fd0e020cdbd6c6397d652c2",
    name: "Parachute",
    symbol: "PAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/7590/thumb/Parachute_Logo.png?1560918207",
  },
  {
    chainId: 137,
    address: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    name: "Compound",
    symbol: "COMP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425",
  },
  {
    chainId: 137,
    address: "0xee7666aacaefaa6efeef62ea40176d3eb21953b9",
    name: "MCH Coin",
    symbol: "MCHC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15399/thumb/MCHC.jpg?1620721307",
  },
  {
    chainId: 137,
    address: "0xfd4959c06fbcc02250952daebf8e0fb38cf9fd8c",
    name: "ZeroSwap",
    symbol: "ZEE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12861/thumb/logo.?1666110579",
  },
  {
    chainId: 137,
    address: "0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4",
    name: "GET Protocol",
    symbol: "GET",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/1927/thumb/GET_Protocol.png?1552893230",
  },
  {
    chainId: 137,
    address: "0xcaf5191fc480f43e4df80106c7695eca56e48b18",
    name: "DinoX",
    symbol: "DNXC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17321/thumb/asset_icon_dnxc_200.png?1627292452",
  },
  {
    chainId: 137,
    address: "0x381caf412b45dac0f62fbeec89de306d3eabe384",
    name: "DAO Invest",
    symbol: "VEST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17901/thumb/logo-round-200.png?1629773511",
  },
  {
    chainId: 137,
    address: "0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435",
    name: "BlockWallet",
    symbol: "BLANK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14209/thumb/blank.png?1614940842",
  },
  {
    chainId: 137,
    address: "0xfc40a4f89b410a1b855b5e205064a38fc29f5eb5",
    name: "rUSD",
    symbol: "RUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16184/thumb/rUSD-Logo-200.png?1623231145",
  },
  {
    chainId: 137,
    address: "0x598e49f01befeb1753737934a5b11fea9119c796",
    name: "Adshares",
    symbol: "ADS",
    decimals: 11,
    logoURI:
      "https://assets.coingecko.com/coins/images/868/thumb/rnO9DyJ.png?1663921311",
  },
  {
    chainId: 137,
    address: "0xdc0e17eae3b9651875030244b971fa0223a1764f",
    name: "PERI Finance",
    symbol: "PERI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15313/thumb/6xVEMS1.png?1620375905",
  },
  {
    chainId: 137,
    address: "0x6fb54ffe60386ac33b722be13d2549dd87bf63af",
    name: "Polinate",
    symbol: "POLI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18096/thumb/Polinate_Games___Guilds_Elements-05.png?1648806645",
  },
  {
    chainId: 137,
    address: "0x2df54842cd85c60f21b4871e09bcc6047b2dcc4d",
    name: "Immortl",
    symbol: "IMRTL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21983/thumb/ONE.png?1640575713",
  },
  {
    chainId: 137,
    address: "0xc58158c14d4757ef36ce25e493758f2fceedec5d",
    name: "DeFi11",
    symbol: "D11",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18174/thumb/wjuVH0sC_400x400.jpg?1631267074",
  },
  {
    chainId: 137,
    address: "0x0e7252706393470ffb0629da2caa39fc9340f2d4",
    name: "DogeGF",
    symbol: "DOGEGF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18651/thumb/dogf.png?1632758659",
  },
  {
    chainId: 137,
    address: "0xd0e9c8f5fae381459cf07ec506c1d2896e8b5df6",
    name: "Internet of Energy Network",
    symbol: "IOEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19095/thumb/12799.png?1634422996",
  },
  {
    chainId: 137,
    address: "0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc",
    name: "Archethic",
    symbol: "UCO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12330/thumb/Archethic_logo.png?1665916980",
  },
  {
    chainId: 137,
    address: "0xd6a5ab46ead26f49b03bbb1f9eb1ad5c1767974a",
    name: "Ethermon",
    symbol: "EMON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15889/thumb/LtET0reH_400x400.jpg?1622213962",
  },
  {
    chainId: 137,
    address: "0xfbdd194376de19a88118e84e279b977f165d01b8",
    name: "Beefy Finance",
    symbol: "BIFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12704/thumb/token.png?1601876182",
  },
  {
    chainId: 137,
    address: "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9",
    name: "NFT Worlds",
    symbol: "WRLD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22112/thumb/ZyBrRgfO.jpg?1640842284",
  },
  {
    chainId: 137,
    address: "0x2ab4f9ac80f33071211729e45cfc346c1f8446d5",
    name: "Chain Guardians",
    symbol: "CGG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14326/thumb/cgg_logo.png?1615429976",
  },
  {
    chainId: 137,
    address: "0x614389eaae0a6821dc49062d56bda3d9d45fa2ff",
    name: "Orbs",
    symbol: "ORBS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/4630/thumb/Orbs.jpg?1547039896",
  },
  {
    chainId: 137,
    address: "0x5198e7cc1640049de37d1bd10b03fa5a3afda120",
    name: "Kaby Arena",
    symbol: "KABY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18090/thumb/URPKhnop_400x400.jpg?1630416255",
  },
  {
    chainId: 137,
    address: "0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8",
    name: "Anyswap",
    symbol: "ANY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12242/thumb/anyswap.jpg?1598443880",
  },
  {
    chainId: 137,
    address: "0x34f380a4e3389e99c0369264453523bbe5af7fab",
    name: "Kangal",
    symbol: "KANGAL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14241/thumb/logo-200.png?1622341641",
  },
  {
    chainId: 137,
    address: "0x00d5149cdf7cec8725bf50073c51c4fa58ecca12",
    name: "UniPower",
    symbol: "POWER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11618/thumb/unipower.png?1591943398",
  },
  {
    chainId: 137,
    address: "0xf4b0903774532aee5ee567c02aab681a81539e92",
    name: "Gaj Finance",
    symbol: "GAJ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15257/thumb/logo200x200.png?1629887093",
  },
  {
    chainId: 137,
    address: "0xf8f9efc0db77d8881500bb06ff5d6abc3070e695",
    name: "Synapse",
    symbol: "SYN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18024/thumb/synapse_social_icon.png?1663921797",
  },
  {
    chainId: 137,
    address: "0x554f074d9ccda8f483d1812d4874cbebd682644e",
    name: "AnRKey X",
    symbol: "ANRX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13415/thumb/anrkey.jpg?1608311301",
  },
  {
    chainId: 137,
    address: "0xaecebfcf604ad245eaf0d5bd68459c3a7a6399c2",
    name: "RAMP  OLD ",
    symbol: "RAMP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12837/thumb/RAMP-Logo-v2-1000pxsq.png?1617952606",
  },
  {
    chainId: 137,
    address: "0x5fcb9de282af6122ce3518cde28b7089c9f97b26",
    name: "DeHive",
    symbol: "DHV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14926/thumb/logo_200x200.png?1626181831",
  },
  {
    chainId: 137,
    address: "0x0e98c977b943f06075b2d795794238fbfb9b9a34",
    name: "Tomb",
    symbol: "TOMB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16133/thumb/tomb_icon_noBG.png?1623055476",
  },
  {
    chainId: 137,
    address: "0xad684e79ce4b6d464f2ff7c3fd51646892e24b96",
    name: "Autonio",
    symbol: "NIOX",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/1122/thumb/NewLogo.png?1597298450",
  },
  {
    chainId: 137,
    address: "0xc3cffdaf8f3fdf07da6d5e3a89b8723d5e385ff8",
    name: "Rubic",
    symbol: "RBC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12629/thumb/200x200.png?1607952509",
  },
  {
    chainId: 137,
    address: "0xe9993763e0b7f7d915a62a5f22a6e151f91d98a8",
    name: "TORG",
    symbol: "TORG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17596/thumb/TORG_Logo_200x200.png?1628586056",
  },
  {
    chainId: 137,
    address: "0xdae89da41a96956e9e70320ac9c0dd077070d3a5",
    name: "Centaur",
    symbol: "CNTR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12743/thumb/logo_%2898%29.png?1602630445",
  },
  {
    chainId: 137,
    address: "0x0cfbbb89fd58f6b49b7bf5665397ddc84003d47c",
    name: "WHEY",
    symbol: "WHEY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14883/thumb/WHEY_logo_black_0421_v1.png?1618893173",
  },
  {
    chainId: 137,
    address: "0x65ad6a2288b2dd23e466226397c8f5d1794e58fc",
    name: "GamyFi",
    symbol: "GFX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14559/thumb/circle-cropped_%281%29.png?1617008124",
  },
  {
    chainId: 137,
    address: "0x8a0e8b4b0903929f47c3ea30973940d4a9702067",
    name: "InsurAce",
    symbol: "INSUR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14226/thumb/insur.png?1615124622",
  },
  {
    chainId: 137,
    address: "0x39fc9e94caeacb435842fadedecb783589f50f5f",
    name: "Kampay",
    symbol: "KAMPAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8289/thumb/6130e86152bdb07e2848de00_200_4x.png?1630738336",
  },
  {
    chainId: 137,
    address: "0x7f67639ffc8c93dd558d452b8920b28815638c44",
    name: "iMe Lab",
    symbol: "LIME",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16243/thumb/lim_200.2.png?1623376205",
  },
  {
    chainId: 137,
    address: "0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21",
    name: "Modefi",
    symbol: "MOD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13980/thumb/modefi_logo.png?1613453111",
  },
  {
    chainId: 137,
    address: "0xe1c42be9699ff4e11674819c1885d43bd92e9d15",
    name: "Torum",
    symbol: "XTM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18393/thumb/torum-transparent-cmc.png?1631760805",
  },
  {
    chainId: 137,
    address: "0x632b8c4e95b2f8a9309417f8d990ab9c04c77369",
    name: "Weble Ecosystem",
    symbol: "WET",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17353/thumb/cropped-logo-wombat.png?1627368904",
  },
  {
    chainId: 137,
    address: "0x31042a4e66eda0d12143ffc8cc1552d611da4cba",
    name: "Morpheus Labs",
    symbol: "MITX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3164/thumb/mitx.png?1604888269",
  },
  {
    chainId: 137,
    address: "0x71b821aa52a49f32eed535fca6eb5aa130085978",
    name: "0xBitcoin",
    symbol: "0XBTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/4454/thumb/0xbtc.png?1561603765",
  },
  {
    chainId: 137,
    address: "0xce829a89d4a55a63418bcc43f00145adef0edb8e",
    name: "renDOGE",
    symbol: "RENDOGE",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/13796/thumb/Dogecoin.jpg?1628072827",
  },
  {
    chainId: 137,
    address: "0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c",
    name: "Jarvis Synthetic Euro",
    symbol: "JEUR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15725/thumb/jEUR.png?1634046044",
  },
  {
    chainId: 137,
    address: "0xbd1463f02f61676d53fd183c2b19282bff93d099",
    name: "Jarvis Synthetic Swiss Franc",
    symbol: "JCHF",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15727/thumb/jCHF.png?1634046084",
  },
  {
    chainId: 137,
    address: "0x767058f11800fba6a682e73a6e79ec5eb74fac8c",
    name: "Jarvis Synthetic British Pound",
    symbol: "JGBP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15726/thumb/jGBP.png?1634046064",
  },
  {
    chainId: 137,
    address: "0xb9f9e37c2cdbaff928c3da730b02f06fe09ae70e",
    name: "Zerogoki",
    symbol: "REI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17015/thumb/iconZerogoki.png?1626618921",
  },
  {
    chainId: 137,
    address: "0x0d6ae2a429df13e44a07cd2969e085e4833f64a0",
    name: "PolkaBridge",
    symbol: "PBR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13744/thumb/symbol-whitebg200x200.png?1611377553",
  },
  {
    chainId: 137,
    address: "0xcf32822ff397ef82425153a9dcb726e5ff61dca7",
    name: "GAMEE",
    symbol: "GMEE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14716/thumb/gmee-200x200.png?1621827468",
  },
  {
    chainId: 137,
    address: "0x4597c8a59ab28b36840b82b3a674994a279593d0",
    name: "Circuits of Value",
    symbol: "COVAL",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/588/thumb/coval-logo.png?1599493950",
  },
  {
    chainId: 137,
    address: "0x10adf16a60f0020477c70473d6ea595d9bc29372",
    name: "UMI",
    symbol: "UMI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16953/thumb/umi.PNG?1625793521",
  },
  {
    chainId: 137,
    address: "0x2b88ad57897a8b496595925f43048301c37615da",
    name: "Pickle Finance",
    symbol: "PICKLE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12435/thumb/0M4W6Yr6_400x400.jpg?1643006080",
  },
  {
    chainId: 137,
    address: "0x211f4e76fcb811ed2b310a232a24b3445d95e3bc",
    name: "Matrix Labs",
    symbol: "MATRIX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18297/thumb/matrixlabs.png?1643277367",
  },
  {
    chainId: 137,
    address: "0x596ebe76e2db4470966ea395b0d063ac6197a8c5",
    name: "Jarvis Reward",
    symbol: "JRT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/10390/thumb/cfeii0y.png?1578868949",
  },
  {
    chainId: 137,
    address: "0x00e5646f60ac6fb446f621d146b6e1886f002905",
    name: "Rai Reflex Index",
    symbol: "RAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334",
  },
  {
    chainId: 137,
    address: "0xe111178a87a3bff0c8d18decba5798827539ae99",
    name: "STASIS EURO",
    symbol: "EURS",
    decimals: 2,
    logoURI:
      "https://assets.coingecko.com/coins/images/5164/thumb/EURS_300x300.png?1550571779",
  },
  {
    chainId: 137,
    address: "0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128",
    name: "Parallel",
    symbol: "PAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14153/thumb/par_round_200.png?1614670422",
  },
  {
    chainId: 137,
    address: "0xe0ce60af0850bf54072635e66e79df17082a1109",
    name: "Propel",
    symbol: "PROPEL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8794/thumb/-RNl00DU_400x400.jpg?1601543259",
  },
  {
    chainId: 137,
    address: "0x4287f07cbe6954f9f0decd91d0705c926d8d03a4",
    name: "Trace Network Labs",
    symbol: "TRACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23266/thumb/Token_Icon_02.png?1655797843",
  },
  {
    chainId: 137,
    address: "0x4d8181f051e617642e233be09cea71cc3308ffd4",
    name: "Digible",
    symbol: "DIGI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14960/thumb/RE3Fiua.png?1619148839",
  },
  {
    chainId: 137,
    address: "0x6286a9e6f7e745a6d884561d88f94542d6715698",
    name: "Cryptomeda",
    symbol: "TECH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17983/thumb/tech.png?1654330771",
  },
  {
    chainId: 137,
    address: "0xadac33f543267c4d59a8c299cf804c303bc3e4ac",
    name: "Mimo Governance",
    symbol: "MIMO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16449/thumb/mimodefi.PNG?1624240539",
  },
  {
    chainId: 137,
    address: "0x0df0f72ee0e5c9b7ca761ecec42754992b2da5bf",
    name: "Automata",
    symbol: "ATA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15985/thumb/ATA.jpg?1622535745",
  },
  {
    chainId: 137,
    address: "0x709a4b6217584188ddb93c82f5d716d969acce1c",
    name: "Hanu Yokia",
    symbol: "HANU",
    decimals: 12,
    logoURI:
      "https://assets.coingecko.com/coins/images/17161/thumb/Goji_Hanu_Logo_200x200.png?1627127472",
  },
  {
    chainId: 137,
    address: "0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19",
    name: "OwlDAO",
    symbol: "OWL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18717/thumb/owldao.PNG?1633089590",
  },
  {
    chainId: 137,
    address: "0xc91c06db0f7bffba61e2a5645cc15686f0a8c828",
    name: "Razor Network",
    symbol: "RAZOR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13797/thumb/icon.png?1611919354",
  },
  {
    chainId: 137,
    address: "0x7e7ff932fab08a0af569f93ce65e7b8b23698ad8",
    name: "YfDAI finance",
    symbol: "YF-DAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12385/thumb/1619048513068.png?1622193581",
  },
  {
    chainId: 137,
    address: "0x4e830f67ec499e69930867f9017aeb5b3f629c73",
    name: "Oddz",
    symbol: "ODDZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14421/thumb/NewLogo.png?1645171454",
  },
  {
    chainId: 137,
    address: "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
    name: "DEUS Finance",
    symbol: "DEUS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18778/thumb/DEUS-logo-200x200.png?1646318385",
  },
  {
    chainId: 137,
    address: "0xa7051c5a22d963b81d71c2ba64d46a877fbc1821",
    name: "Sifchain",
    symbol: "EROWAN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14044/thumb/EROWAN.png?1614656300",
  },
  {
    chainId: 137,
    address: "0x23f07a1c03e7c6d0c88e0e05e79b6e3511073fd5",
    name: "Crypto Development Services",
    symbol: "CDS",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/21304/thumb/JhUZ3Rk.png?1638883308",
  },
  {
    chainId: 137,
    address: "0x8c92e38eca8210f4fcbf17f0951b198dd7668292",
    name: "dHEDGE DAO",
    symbol: "DHT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12508/thumb/dht.png?1600752201",
  },
  {
    chainId: 137,
    address: "0x428360b02c1269bc1c79fbc399ad31d58c1e8fda",
    name: "Digital Fitness",
    symbol: "DEFIT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14699/thumb/Defit.png?1623738365",
  },
  {
    chainId: 137,
    address: "0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a",
    name: "Continuum World",
    symbol: "UM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18798/thumb/Moneda.png?1633474110",
  },
  {
    chainId: 137,
    address: "0x86775d0b80b3df266af5377db34ba8f318d715ec",
    name: "Xend Finance",
    symbol: "XEND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14496/thumb/WeChat_Image_20210325163206.png?1616661216",
  },
  {
    chainId: 137,
    address: "0xce6bf09e5c7a3e65b84f88dcc6475c88d38ba5ef",
    name: "Opacity",
    symbol: "OPCT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/7237/thumb/Opacity.jpg?1551843524",
  },
  {
    chainId: 137,
    address: "0xb41ec2c036f8a42da384dde6ada79884f8b84b26",
    name: "Tidal Finance",
    symbol: "TIDAL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14460/thumb/Tidal-mono.png?1616233894",
  },
  {
    chainId: 137,
    address: "0xf4bb0ed25ac7bcc9c327b88bac5ca288a08ec41e",
    name: "Rari Governance",
    symbol: "RGT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12900/thumb/Rari_Logo_Transparent.png?1613978014",
  },
  {
    chainId: 137,
    address: "0x9d5565da88e596730522cbc5a918d2a89dbc16d9",
    name: "OpenOcean",
    symbol: "OOE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17014/thumb/ooe_log.png?1626074195",
  },
  {
    chainId: 137,
    address: "0x21ce5251d47aa72d2d1dc849b1bcce14d2467d1b",
    name: "Unicly",
    symbol: "UNIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14720/thumb/Unicly.png?1621132059",
  },
  {
    chainId: 137,
    address: "0x4d0def42cf57d6f27cd4983042a55dce1c9f853c",
    name: "DexKit",
    symbol: "KIT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13187/thumb/7739.png?1643187354",
  },
  {
    chainId: 137,
    address: "0x92c59f1cc9a322670cca29594e4d994d48bdfd36",
    name: "PhoenixDAO",
    symbol: "PHNX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11523/thumb/Token_Icon.png?1618447147",
  },
  {
    chainId: 137,
    address: "0x5d47baba0d66083c52009271faf3f50dcc01023c",
    name: "ApeSwap",
    symbol: "BANANA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14870/thumb/banana.png?1648887183",
  },
  {
    chainId: 137,
    address: "0xc10358f062663448a3489fc258139944534592ac",
    name: "Blockchain Monster Hunt",
    symbol: "BCMC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19045/thumb/bcmc-coin-200x200.png?1641398990",
  },
  {
    chainId: 137,
    address: "0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d",
    name: "ORE Network",
    symbol: "ORE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18917/thumb/ORE_FullColor.png?1633921977",
  },
  {
    chainId: 137,
    address: "0x25788a1a171ec66da6502f9975a15b609ff54cf6",
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14003/thumb/PoolTogether.png?1613585632",
  },
  {
    chainId: 137,
    address: "0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5",
    name: "Carbon",
    symbol: "CRBN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13262/thumb/carbon.png?1662693418",
  },
  {
    chainId: 137,
    address: "0x87847703d4bb4fcd42db887ffdcb94496e77e3ab",
    name: "Hypersign Identity",
    symbol: "HID",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16158/thumb/hypersign_ONLYlogo_Yellow.png?1623140987",
  },
  {
    chainId: 137,
    address: "0x49b1be61a8ca3f9a9f178d6550e41e00d9162159",
    name: "GG",
    symbol: "GGTK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13666/thumb/ggtk.png?1629348879",
  },
  {
    chainId: 137,
    address: "0x09211dc67f9fe98fb7bbb91be0ef05f4a12fa2b2",
    name: "Yieldwatch",
    symbol: "WATCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14186/thumb/WATCH1.png?1614825718",
  },
  {
    chainId: 137,
    address: "0x7cdc0421469398e0f3aa8890693d86c840ac8931",
    name: "Azuki",
    symbol: "AZUKI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13091/thumb/bdUBSCo.png?1605169403",
  },
  {
    chainId: 137,
    address: "0xbc2597d3f1f9565100582cde02e3712d03b8b0f6",
    name: "CheesecakeSwap",
    symbol: "CCAKE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14547/thumb/CCAKElogo.png?1616984147",
  },
  {
    chainId: 137,
    address: "0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a",
    name: "JDI",
    symbol: "JDI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15220/thumb/JDI.png?1620119566",
  },
  {
    chainId: 137,
    address: "0x6d2a71f4edf10ab1e821b9b373363e1e24e5df6b",
    name: "Tako",
    symbol: "TAKO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16522/thumb/logo192.png?1624330730",
  },
  {
    chainId: 137,
    address: "0x863d6074afaf02d9d41a5f8ea83278df7089aa86",
    name: "CryptoBlades",
    symbol: "SKILL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15334/thumb/cryptoblade.PNG?1620596874",
  },
  {
    chainId: 137,
    address: "0x1c2e7118591ec1b6122e4fe3d645706a9747b10e",
    name: "EsportsPro",
    symbol: "ESPRO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14187/thumb/logo.jpg?1614830245",
  },
  {
    chainId: 137,
    address: "0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978",
    name: "Amun Polygon Ecosystem Index",
    symbol: "PECO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19270/thumb/amun-peco.png?1634868167",
  },
  {
    chainId: 137,
    address: "0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8",
    name: "IX Swap",
    symbol: "IXS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18069/thumb/ixswap.PNG?1630375152",
  },
  {
    chainId: 137,
    address: "0xf1c1a3c2481a3a8a3f173a9ab5ade275292a6fa3",
    name: "BLOCKv",
    symbol: "VEE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/1266/thumb/blockv.png?1547351380",
  },
  {
    chainId: 137,
    address: "0xe0339c80ffde91f3e20494df88d4206d86024cdf",
    name: "Dogelon Mars",
    symbol: "ELON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14962/thumb/6GxcPRo3_400x400.jpg?1619157413",
  },
  {
    chainId: 137,
    address: "0x0bd820ad2d7ab7305b5c9538ba824c9b9beb0561",
    name: "Royale",
    symbol: "ROYA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13602/thumb/roya.png?1636031771",
  },
  {
    chainId: 137,
    address: "0xc4bb7277a74678f053259cb1f96140347efbfd46",
    name: "LunaChow",
    symbol: "LUCHOW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18805/thumb/J-MwYfhD_400x400.jpg?1633475157",
  },
  {
    chainId: 137,
    address: "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    name: "TrueUSD",
    symbol: "TUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3449/thumb/tusd.png?1618395665",
  },
  {
    chainId: 137,
    address: "0x66f31345cb9477b427a1036d43f923a557c432a4",
    name: "Inflation Adjusted USDS",
    symbol: "IUSDS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25698/thumb/iUSDS2.png?1653441251",
  },
  {
    chainId: 137,
    address: "0x66e8617d1df7ab523a316a6c01d16aa5bed93681",
    name: "Spice Trade",
    symbol: "SPICE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25770/thumb/SPICE.png?1653607602",
  },
  {
    chainId: 137,
    address: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    name: "Frax",
    symbol: "FRAX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13422/thumb/ethCanonicalFRAX.png?1669277108",
  },
  {
    chainId: 137,
    address: "0x11602a402281974a70c2b4824d58ebede967e2be",
    name: "Beyondfi",
    symbol: "BYN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14746/thumb/token_symbol.png?1669462137",
  },
  {
    chainId: 137,
    address: "0xb1d82666384be5f8c59aa18e650493abb8a614ad",
    name: "Blockchain Adventurers Guild",
    symbol: "BAG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14863/thumb/3iw7MAi.png?1618810870",
  },
  {
    chainId: 137,
    address: "0x32515ffdc3a84cfbf9ad4db14ef8f0a535c7afd6",
    name: "Baked",
    symbol: "BAKED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19178/thumb/rebaked-logo-full.png?1634613132",
  },
  {
    chainId: 137,
    address: "0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb",
    name: "Nash",
    symbol: "NEX",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/3246/thumb/nash.png?1653656442",
  },
  {
    chainId: 137,
    address: "0xb6b5cdf74606181a1b05bfc0b9f17fc2a64b0cd5",
    name: "Wallfair",
    symbol: "WFAIR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18920/thumb/wallfair_logo.png?1633942136",
  },
  {
    chainId: 137,
    address: "0x04429fbb948bbd09327763214b45e505a5293346",
    name: "Allbridge",
    symbol: "ABR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18690/thumb/abr.png?1640742053",
  },
  {
    chainId: 137,
    address: "0x6968105460f67c3bf751be7c15f92f5286fd0ce5",
    name: "Monavale",
    symbol: "MONA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13298/thumb/monavale_logo.jpg?1607232721",
  },
  {
    chainId: 137,
    address: "0x2fd4d793c1905d82018d75e3b09d3035856890a1",
    name: "Spherium",
    symbol: "SPHRI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17787/thumb/Group_15.png?1629252159",
  },
  {
    chainId: 137,
    address: "0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41",
    name: "Autobahn Network",
    symbol: "TXL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12432/thumb/txl.png?1646463631",
  },
  {
    chainId: 137,
    address: "0x55b1a124c04a54eefdefe5fa2ef5f852fb5f2f26",
    name: "Ethereum Meta",
    symbol: "ETHM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/6586/thumb/ethereum-meta.png?1548125409",
  },
  {
    chainId: 137,
    address: "0x26373ec913876c9e6d38494dde458cb8649cb30c",
    name: "Ojamu",
    symbol: "OJA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18947/thumb/ojamu-icon-PNK.png?1634006741",
  },
  {
    chainId: 137,
    address: "0x3c1bb39bb696b443a1d80bb2b3a3d950ba9dee87",
    name: "Wall Street Games",
    symbol: "WSG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15872/thumb/X3Awe42.png?1622181358",
  },
  {
    chainId: 137,
    address: "0xfe712251173a2cd5f5be2b46bb528328ea3565e1",
    name: "Metaverse Index",
    symbol: "MVI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14684/thumb/MVI_logo.png?1617776444",
  },
  {
    chainId: 137,
    address: "0xa0cb0ce7c6d93a7ebd72952feb4407dddee8a194",
    name: "Shibaken Finance",
    symbol: "SHIBAKEN",
    decimals: 0,
    logoURI:
      "https://assets.coingecko.com/coins/images/15413/thumb/shibak.png?1660902286",
  },
  {
    chainId: 137,
    address: "0xf0059cc2b3e980065a906940fbce5f9db7ae40a7",
    name: "Shardus",
    symbol: "ULT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8383/thumb/final_logo_photoshop.png?1557890272",
  },
  {
    chainId: 137,
    address: "0xe20d2df5041f8ed06976846470f727295cdd4d23",
    name: "0x nodes",
    symbol: "BIOS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15600/thumb/BIOS_01.png?1621737736",
  },
  {
    chainId: 137,
    address: "0xdfc3829b127761a3218bfcee7fc92e1232c9d116",
    name: "PRivaCY Coin",
    symbol: "PRCY",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/14151/thumb/prcy.png?1614666991",
  },
  {
    chainId: 137,
    address: "0xffb89d7637cf4860884ed48b57ae5562bf64e10f",
    name: "Pika",
    symbol: "PIKA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14419/thumb/pika-logo-2022-nbg.png?1641971069",
  },
  {
    chainId: 137,
    address: "0xe79feaaa457ad7899357e8e2065a3267ac9ee601",
    name: "XAYA",
    symbol: "WCHI",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/2091/thumb/xaya200x200.png?1656561479",
  },
  {
    chainId: 137,
    address: "0x4df071fb2d145be595b767f997c91818694a6ce1",
    name: "MerchDAO",
    symbol: "MRCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14540/thumb/logo_256x256.png?1616891356",
  },
  {
    chainId: 137,
    address: "0x92868a5255c628da08f550a858a802f5351c5223",
    name: "Cross Chain Bridge",
    symbol: "BRIDGE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20223/thumb/0x92868A5255C628dA08F550a858A802f5351C5223.png?1636684446",
  },
  {
    chainId: 137,
    address: "0x5d5530eb3147152fe78d5c4bfeede054c8d1442a",
    name: "WalletNow",
    symbol: "WNOW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20149/thumb/walletnow.PNG?1636582255",
  },
  {
    chainId: 137,
    address: "0xc25351811983818c9fe6d8c580531819c8ade90f",
    name: "IDLE",
    symbol: "IDLE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13286/thumb/image.png?1655284075",
  },
  {
    chainId: 137,
    address: "0xba25b552c8a098afdf276324c32c71fe28e0ad40",
    name: "MacaronSwap",
    symbol: "MCRN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14633/thumb/macaron.png?1623038435",
  },
  {
    chainId: 137,
    address: "0xe7804d91dfcde7f776c90043e03eaa6df87e6395",
    name: "DFX Finance",
    symbol: "DFX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14091/thumb/DFX.png?1614320944",
  },
  {
    chainId: 137,
    address: "0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59",
    name: "Scoobi Doge",
    symbol: "SCOOBI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16101/thumb/scoobi_doge.jpg?1622963978",
  },
  {
    chainId: 137,
    address: "0x2f25d402829ca4085b8ea4d3bc68bf203f5a9fab",
    name: "EagonSwap",
    symbol: "EAGON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20431/thumb/IMG-20210912-WA0003.jpg?1637035180",
  },
  {
    chainId: 137,
    address: "0xd1790c5435b9fb7c9444c749cefe53d40d751eac",
    name: "Mimir",
    symbol: "MIMIR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19551/thumb/xaq5Xlzg_400x400.jpg?1635401626",
  },
  {
    chainId: 137,
    address: "0xc48f61a288a08f1b80c2edd74652e1276b6a168c",
    name: "Geyser",
    symbol: "GYSR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12995/thumb/logo_padded_shifted.png?1636633987",
  },
  {
    chainId: 137,
    address: "0xeaecc18198a475c921b24b8a6c1c1f0f5f3f7ea0",
    name: "MetaGame",
    symbol: "SEED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13099/thumb/V8phEz8V.png?1612854078",
  },
  {
    chainId: 137,
    address: "0x00e197ac4735f1d6a0a2f0df3947e6ed86d09260",
    name: "FRMx",
    symbol: "FRMX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13082/thumb/frmx.png?1660311822",
  },
  {
    chainId: 137,
    address: "0x4cb9050ea02395a8941715ceeffe0cdf60c59f07",
    name: "Wallstreetbets com",
    symbol: "WSB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24170/thumb/18622.png?1646718687",
  },
  {
    chainId: 137,
    address: "0xb53ec4ace420a62cfb75afdeba600d284777cd65",
    name: "Space Token BSC",
    symbol: "SPACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20676/thumb/jYw3kgsY_400x400.png?1637550733",
  },
  {
    chainId: 137,
    address: "0x015c425f6dfabc31e1464cc4339954339f096061",
    name: "ETNA Network",
    symbol: "ETNA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14518/thumb/EtnaNewLogo200x200.png?1643193912",
  },
  {
    chainId: 137,
    address: "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
    name: "Polychain Monsters",
    symbol: "PMON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14604/thumb/polkamon.png?1617238350",
  },
  {
    chainId: 137,
    address: "0xa69d14d6369e414a32a5c7e729b7afbafd285965",
    name: "Global Coin Research",
    symbol: "GCR",
    decimals: 4,
    logoURI:
      "https://assets.coingecko.com/coins/images/14815/thumb/gcr.jpeg?1641461197",
  },
  {
    chainId: 137,
    address: "0x48cbc913de09317df2365e6827df50da083701d5",
    name: "4thpillar technologies",
    symbol: "FOUR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/3434/thumb/four-ticker-2021-256x256.png?1617702287",
  },
  {
    chainId: 137,
    address: "0x980111ae1b84e50222c8843e3a7a038f36fecd2b",
    name: "StackOS",
    symbol: "STACK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14989/thumb/stackos.jpg?1661420187",
  },
  {
    chainId: 137,
    address: "0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae",
    name: "CoinsPaid",
    symbol: "CPD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18092/thumb/coinspaid.PNG?1630452234",
  },
  {
    chainId: 137,
    address: "0x61299774020da444af134c82fa83e3810b309991",
    name: "Render",
    symbol: "RNDR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11636/thumb/rndr.png?1638840934",
  },
  {
    chainId: 137,
    address: "0x7f426f6dc648e50464a0392e60e1bb465a67e9cf",
    name: "Auto",
    symbol: "AUTO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13751/thumb/autofarm_icon_200x200.png?1611494288",
  },
  {
    chainId: 137,
    address: "0xdb298285fe4c5410b05390ca80e8fbe9de1f259b",
    name: "handle fi",
    symbol: "FOREX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18533/thumb/handle.fiFOREXLogoDark200x200.png?1632755675",
  },
  {
    chainId: 137,
    address: "0x50bcbc40306230713239ae1bddd5eefeeaa273dc",
    name: "Asia Coin",
    symbol: "ASIA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18589/thumb/Ou7mp_R1TQ5B9vsBiZ8oQnSv36M6hiA2hESxV_7YSw0.png?1632556422",
  },
  {
    chainId: 137,
    address: "0x280724409b288de06c6d66c05965d3d456e2283a",
    name: "DragonBite",
    symbol: "BITE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16386/thumb/dragonbite.PNG?1623893567",
  },
  {
    chainId: 137,
    address: "0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195",
    name: "Governance OHM",
    symbol: "GOHM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21129/thumb/token_wsOHM_logo.png?1638764900",
  },
  {
    chainId: 137,
    address: "0xef938b6da8576a896f6e0321ef80996f4890f9c4",
    name: "Decentral Games",
    symbol: "DG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21173/thumb/Decentral_Games_Logo-1.png?1638441275",
  },
  {
    chainId: 137,
    address: "0xc6480da81151b2277761024599e8db2ad4c388c8",
    name: "Decentral Games Governance",
    symbol: "XDG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21176/thumb/xDG_Logo.png?1638508706",
  },
  {
    chainId: 137,
    address: "0x65a05db8322701724c197af82c9cae41195b0aa8",
    name: "ShapeShift FOX",
    symbol: "FOX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/9988/thumb/FOX.png?1574330622",
  },
  {
    chainId: 137,
    address: "0x1d607faa0a51518a7728580c238d912747e71f7a",
    name: "Data Economy Index",
    symbol: "DATA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18500/thumb/data_32.png?1632209427",
  },
  {
    chainId: 137,
    address: "0xfbd8a3b908e764dbcd51e27992464b4432a1132b",
    name: "Index Cooperative",
    symbol: "INDEX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12729/thumb/index.png?1634894321",
  },
  {
    chainId: 137,
    address: "0xe51e88dd08499762b8e4eb3a9f3da9b8e79608c3",
    name: "Sekuritance",
    symbol: "SKRT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15495/thumb/skrt.png?1621053881",
  },
  {
    chainId: 137,
    address: "0xc3c604f1943b8c619c5d65cd11a876e9c8edcf10",
    name: "MetaGameHub DAO",
    symbol: "MGH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20625/thumb/mgh.PNG?1637318966",
  },
  {
    chainId: 137,
    address: "0xd0513db39d87e8825389feb10bd911dc53b3a153",
    name: "Fintropy",
    symbol: "FINT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21222/thumb/quExJXdW_400x400.png?1638740691",
  },
  {
    chainId: 137,
    address: "0xb382c1cfa622795a534e5bd56fac93d59bac8b0d",
    name: "KIRO",
    symbol: "KIRO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12688/thumb/logo_kirobo-04.png?1668683315",
  },
  {
    chainId: 137,
    address: "0x8bb93979901cd159bf6763b223fbb315c31ccf7b",
    name: "INDESTCOIN",
    symbol: "INTD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27543/thumb/logoend.png?1668586274",
  },
  {
    chainId: 137,
    address: "0x5e430f88d1be82eb3ef92b6ff06125168fd5dcf2",
    name: "MODA DAO",
    symbol: "MODA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20870/thumb/ModaDAO__logomark-primary_3x.png?1637809145",
  },
  {
    chainId: 137,
    address: "0x51de72b17c7bd12e9e6d69eb506a669eb6b5249e",
    name: "Waves Ducks",
    symbol: "EGG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17298/thumb/200x200_pixel.png?1627288546",
  },
  {
    chainId: 137,
    address: "0x5ee0fe440a4ca7f41bcf06b20c2a30a404e21069",
    name: "ETNA Metabolism",
    symbol: "MTB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23529/thumb/MTBlogo200.png?1644386113",
  },
  {
    chainId: 137,
    address: "0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015",
    name: "THX Network",
    symbol: "THX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21323/thumb/logo-thx-resized-200-200.png?1638945575",
  },
  {
    chainId: 137,
    address: "0x64ee4f41a15d6c431ab6607d4e95462169d50f6c",
    name: "Unvest",
    symbol: "UNV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18119/thumb/unvest.PNG?1630554868",
  },
  {
    chainId: 137,
    address: "0x9e01e0a928588ae6e669b8d1f0f1fa4ab976f617",
    name: "Showcase",
    symbol: "SHO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15084/thumb/icon_%284%29.png?1619662298",
  },
  {
    chainId: 137,
    address: "0x7dc47cfb674beb5827283f6140f635680a5ce992",
    name: "BollyCoin",
    symbol: "BOLLY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21610/thumb/IMG-20211208-124337-701.jpg?1639579540",
  },
  {
    chainId: 137,
    address: "0x695fc8b80f344411f34bdbcb4e621aa69ada384b",
    name: "Nitro League",
    symbol: "NITRO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21668/thumb/_X6vYBDM_400x400.jpg?1639705848",
  },
  {
    chainId: 137,
    address: "0x5314ba045a459f63906aa7c76d9f337dcb7d6995",
    name: "Fodl Finance",
    symbol: "FODL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19040/thumb/Fodl_Symbol_Gradient.png?1651644153",
  },
  {
    chainId: 137,
    address: "0x49690541e3f6e933a9aa3cffee6010a7bb5b72d7",
    name: "Axia",
    symbol: "AXIAV3",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12906/thumb/axia_200x200.png?1613988058",
  },
  {
    chainId: 137,
    address: "0x72b9f88e822cf08b031c2206612b025a82fb303c",
    name: "Day By Day",
    symbol: "DBD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21691/thumb/DBD-icon_200x200_%281%29.png?1639721079",
  },
  {
    chainId: 137,
    address: "0x59b5654a17ac44f3068b3882f298881433bb07ef",
    name: "CoinPoker",
    symbol: "CHP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/1808/thumb/coinpoker.jpg?1547036113",
  },
  {
    chainId: 137,
    address: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    name: "The Sandbox",
    symbol: "SAND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942",
  },
  {
    chainId: 137,
    address: "0xc748b2a084f8efc47e086ccddd9b7e67aeb571bf",
    name: "HUMAN Protocol",
    symbol: "HMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16412/thumb/human_protocol.PNG?1623971316",
  },
  {
    chainId: 137,
    address: "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603",
    name: "WOO Network",
    symbol: "WOO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg?1603670367",
  },
  {
    chainId: 137,
    address: "0xeb94a5e2c643403e29fa1d7197e7e0708b09ad84",
    name: "OnX Finance",
    symbol: "ONX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13445/thumb/onxlogo-1.png?1608629659",
  },
  {
    chainId: 137,
    address: "0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0",
    name: "Forj",
    symbol: "BONDLY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13322/thumb/FORJ_twitter_twitter-linked_in_profile_%281%29.png?1653026729",
  },
  {
    chainId: 137,
    address: "0xa3ed22eee92a3872709823a6970069e12a4540eb",
    name: "Frontier",
    symbol: "FRONT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12479/thumb/frontier_logo.png?1600145472",
  },
  {
    chainId: 137,
    address: "0x10635bf5c17f5e4c0ed9012aef7c12f96a57a4dd",
    name: "TapX",
    symbol: "TAP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13942/thumb/tapx.png?1652444051",
  },
  {
    chainId: 137,
    address: "0xfd0cbddec28a93bb86b9db4a62258f5ef25fefde",
    name: "BITT",
    symbol: "BITT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13783/thumb/BITT_Logo_256pixels.png?1611733961",
  },
  {
    chainId: 137,
    address: "0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c",
    name: "FUSION",
    symbol: "FSN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2515/thumb/Fusion_200x200.png?1639629907",
  },
  {
    chainId: 137,
    address: "0xaee0ffb690b37449b7f1c49b199e1e3ec6084490",
    name: "AurusGOLD",
    symbol: "AWG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11594/thumb/2021-12-06-Aurus-tokens-for-coingecko-AWG-flat-color-v1-r1-AS.png?1640223324",
  },
  {
    chainId: 137,
    address: "0x72928d5436ff65e57f72d5566dcd3baedc649a88",
    name: "humanDAO",
    symbol: "HDAO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21138/thumb/Untitled-2.jpg?1645163749",
  },
  {
    chainId: 137,
    address: "0x42d61d766b85431666b39b89c43011f24451bff6",
    name: "ParaSwap",
    symbol: "PSP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20403/thumb/ep7GqM19_400x400.jpg?1636979120",
  },
  {
    chainId: 137,
    address: "0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d",
    name: "Synapse Network",
    symbol: "SNP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17962/thumb/Webp-net-resizeimage_%282%29.png?1629943450",
  },
  {
    chainId: 137,
    address: "0xe8f157e041df3b28151b667364e9c90789da7923",
    name: "Opium",
    symbol: "OPIUM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13758/thumb/opium-token-black_%281%29.png?1611767960",
  },
  {
    chainId: 137,
    address: "0xd13eb71515dc48a8a367d12f844e5737bab415df",
    name: "PolkaEx",
    symbol: "PKEX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18616/thumb/1024-1024-02.png?1632698540",
  },
  {
    chainId: 137,
    address: "0x84342e932797fc62814189f01f0fb05f52519708",
    name: "Neighbourhoods",
    symbol: "NHT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22055/thumb/social_media_logo_black_bg.png?1640682530",
  },
  {
    chainId: 137,
    address: "0x123706cdd8e60324e610e9a2cc7012d0f45a5b8e",
    name: "Quidd",
    symbol: "QUIDD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19725/thumb/quidd.png?1637303435",
  },
  {
    chainId: 137,
    address: "0xf244e91a46a9cdd48da295ca5d0b27894f8032b1",
    name: "UniArts",
    symbol: "UART",
    decimals: 12,
    logoURI:
      "https://assets.coingecko.com/coins/images/22092/thumb/3Rx82r_w_400x400.png?1640823145",
  },
  {
    chainId: 137,
    address: "0xe46f5128b933e5a6f907fe73ece80059c222db0a",
    name: "dotmoovs",
    symbol: "MOOV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15817/thumb/dotmoovs-symbol-gradient.png?1635332626",
  },
  {
    chainId: 137,
    address: "0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05",
    name: "Impermax  OLD ",
    symbol: "IMX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15126/thumb/Copy_of_200px.png?1619761475",
  },
  {
    chainId: 137,
    address: "0x5e0294af1732498c77f8db015a2d52a76298542b",
    name: "Orion Money",
    symbol: "ORION",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18630/thumb/YtrqPIWc.png?1632710781",
  },
  {
    chainId: 137,
    address: "0x430ef9263e76dae63c84292c3409d61c598e9682",
    name: "Vulcan Forged",
    symbol: "PYR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14770/thumb/1617088937196.png?1619414736",
  },
  {
    chainId: 137,
    address: "0xf2ae0038696774d65e67892c9d301c5f2cbbda58",
    name: "CargoX",
    symbol: "CXO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2580/thumb/cargox.png?1547738832",
  },
  {
    chainId: 137,
    address: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    name: "Multichain",
    symbol: "MULTI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22087/thumb/1_Wyot-SDGZuxbjdkaOeT2-A.png?1640764238",
  },
  {
    chainId: 137,
    address: "0x42f6bdcfd82547e89f1069bf375aa60e6c6c063d",
    name: "Civilization",
    symbol: "CIV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17626/thumb/civ-200x200.png?1628674350",
  },
  {
    chainId: 137,
    address: "0xd192bac61522e0bc13543528173e69c44472c93a",
    name: "VersoView",
    symbol: "VVT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13380/thumb/HkfxEtWh_400x400.jpg?1608031723",
  },
  {
    chainId: 137,
    address: "0x2d72a97a31dc920db03330780d30074626e39c8a",
    name: "PolkaParty",
    symbol: "POLP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17867/thumb/polp_logo.jpg?1641355239",
  },
  {
    chainId: 137,
    address: "0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59",
    name: "Popsicle Finance",
    symbol: "ICE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14586/thumb/ice.png?1617188825",
  },
  {
    chainId: 137,
    address: "0x49a0400587a7f65072c87c4910449fdcc5c47242",
    name: "Magic Internet Money",
    symbol: "MIM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16786/thumb/mimlogopng.png?1624979612",
  },
  {
    chainId: 137,
    address: "0x8f36cc333f55b09bb71091409a3d7ade399e3b1c",
    name: "Cherry Network",
    symbol: "CHER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21855/thumb/cherry.PNG?1640144127",
  },
  {
    chainId: 137,
    address: "0xd5fa77a860fea9cff31da91bbf9e0faea9538290",
    name: "Dog Collar",
    symbol: "COLLAR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18324/thumb/dcLogo.png?1631532599",
  },
  {
    chainId: 137,
    address: "0x7fb27ee135db455de5ab1ccec66a24cbc82e712d",
    name: "Bankless DeFi Innovation Index",
    symbol: "GMI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22238/thumb/GMI_LOGO-07.png?1641266293",
  },
  {
    chainId: 137,
    address: "0x09c5a4bca808bd1ba2b8e6b3aaf7442046b4ca5b",
    name: "Vesper Finance",
    symbol: "VSP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13527/thumb/vesper_logo.jpg?1609399927",
  },
  {
    chainId: 137,
    address: "0x6863bd30c9e313b264657b107352ba246f8af8e0",
    name: "BlackPool",
    symbol: "BPT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15887/thumb/uyO7dQzR_400x400.jpg?1622199432",
  },
  {
    chainId: 137,
    address: "0xa649325aa7c5093d12d6f98eb4378deae68ce23f",
    name: "Wrapped BNB",
    symbol: "WBNB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12591/thumb/binance-coin-logo.png?1600947313",
  },
  {
    chainId: 137,
    address: "0x638df98ad8069a15569da5a6b01181804c47e34c",
    name: "Dafi Protocol",
    symbol: "DAFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14428/thumb/Dafi_Black_Icon.png?1616040406",
  },
  {
    chainId: 137,
    address: "0x1631244689ec1fecbdd22fb5916e920dfc9b8d30",
    name: "Ovr",
    symbol: "OVR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13429/thumb/ovr_logo.png?1608518911",
  },
  {
    chainId: 137,
    address: "0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab",
    name: "Bankless DAO",
    symbol: "BANK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15227/thumb/j4WEJrwU.png?1622615796",
  },
  {
    chainId: 137,
    address: "0xdda7b23d2d72746663e7939743f929a3d85fc975",
    name: "Ambire AdEx",
    symbol: "ADX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/847/thumb/Ambire_AdEx_Symbol_color.png?1655432540",
  },
  {
    chainId: 137,
    address: "0xd1a5f2a049343fc4d5f8d478f734eba51b22375e",
    name: "KeyFi",
    symbol: "KEYFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15098/thumb/keyfi_logo.jpg?1619690054",
  },
  {
    chainId: 137,
    address: "0x9c32185b81766a051e08de671207b34466dd1021",
    name: "BTC Proxy",
    symbol: "BTCPX",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/22630/thumb/MB1aYO7T_400x400.jpg?1642342656",
  },
  {
    chainId: 137,
    address: "0xb140665dde25c644c6b418e417c930de8a8a6ac9",
    name: "Atari",
    symbol: "ATRI",
    decimals: 0,
    logoURI:
      "https://assets.coingecko.com/coins/images/12992/thumb/AtariLogoPS_200x200_%281%29.png?1643189483",
  },
  {
    chainId: 137,
    address: "0xf9a4bbaa7fa1dd2352f1a47d6d3fcff259a6d05f",
    name: "Lepasa",
    symbol: "LEPA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22745/thumb/lepasa.PNG?1642550975",
  },
  {
    chainId: 137,
    address: "0xeee3371b89fc43ea970e908536fcddd975135d8a",
    name: "The Doge NFT",
    symbol: "DOG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18111/thumb/Doge.png?1630696110",
  },
  {
    chainId: 137,
    address: "0xe4bf2864ebec7b7fdf6eeca9bacae7cdfdaffe78",
    name: "DODO",
    symbol: "DODO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png?1601433025",
  },
  {
    chainId: 137,
    address: "0xda5949544aaf6124d06f398bfde4c86cc33b0ee7",
    name: "CyberFM",
    symbol: "CYFM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/5476/thumb/cyberfm.png?1547041216",
  },
  {
    chainId: 137,
    address: "0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46",
    name: "UniX",
    symbol: "UNIX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20674/thumb/unix.png?1663499268",
  },
  {
    chainId: 137,
    address: "0x56a0efefc9f1fbb54fbd25629ac2aa764f1b56f7",
    name: "AurusDeFi",
    symbol: "AWX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12684/thumb/2021-12-06-Aurus-tokens-for-coingecko-AWX-flat-color-v1-r1-AS.png?1640223413",
  },
  {
    chainId: 137,
    address: "0xe6469ba6d2fd6130788e0ea9c0a0515900563b59",
    name: "TerraUSD  Wormhole ",
    symbol: "UST",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/21150/thumb/UST_wh_small.png?1644223065",
  },
  {
    chainId: 137,
    address: "0xba3cb8329d442e6f9eb70fafe1e214251df3d275",
    name: "Swash",
    symbol: "SWASH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18774/thumb/swash.png?1634089759",
  },
  {
    chainId: 137,
    address: "0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f",
    name: "GenomesDAO",
    symbol: "GENE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20807/thumb/1637683704200x200.png?1637708934",
  },
  {
    chainId: 137,
    address: "0xaee24d5296444c007a532696aada9de5ce6cafd0",
    name: "SW DAO",
    symbol: "SWD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19336/thumb/mxhLivtN.png?1635122459",
  },
  {
    chainId: 137,
    address: "0xd93f7e271cb87c23aaa73edc008a79646d1f9912",
    name: "SOL  Wormhole ",
    symbol: "SOL",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/22876/thumb/SOL_wh_small.png?1644224316",
  },
  {
    chainId: 137,
    address: "0x3553f861dec0257bada9f8ed268bf0d74e45e89c",
    name: "Tether USD  Wormhole ",
    symbol: "USDTSO",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/22881/thumb/USDTso_wh_small.png?1644223113",
  },
  {
    chainId: 137,
    address: "0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d",
    name: "Binance Coin  Wormhole ",
    symbol: "BNB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22884/thumb/BNB_wh_small.png?1644224553",
  },
  {
    chainId: 137,
    address: "0xe631dabef60c37a37d70d3b4f812871df663226f",
    name: "Swarm Markets",
    symbol: "SMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17488/thumb/swarm-SMT-token-symbol_200x200.png?1655373659",
  },
  {
    chainId: 137,
    address: "0x11cd37bb86f65419713f30673a480ea33c826872",
    name: "Ethereum  Wormhole ",
    symbol: "ETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22990/thumb/ETH_wh_small.png?1644225466",
  },
  {
    chainId: 137,
    address: "0xb41c43fabd22a6c6ea135e975769e9051f9ee8ad",
    name: "Ebox",
    symbol: "EBOX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14528/thumb/ebox.png?1639203519",
  },
  {
    chainId: 137,
    address: "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4",
    name: "agEUR",
    symbol: "AGEUR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19479/thumb/agEUR.png?1635283566",
  },
  {
    chainId: 137,
    address: "0xd281af594cbb99e8469f3591d57a0c72eb725bdb",
    name: "Marvelous NFTs",
    symbol: "MNFT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22613/thumb/mnft.png?1642238172",
  },
  {
    chainId: 137,
    address: "0x955ce23f20217a6aa205620b40ede4c9e83d325f",
    name: "Dreamr Platform",
    symbol: "DMR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18307/thumb/DMR_SYMBOL_OFFICIAL_200X200.png?1631508227",
  },
  {
    chainId: 137,
    address: "0x8f6196901a4a153d8ee8f3fa779a042f6092d908",
    name: "DxSale Network",
    symbol: "SALE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12250/thumb/dx-light.png?1613965390",
  },
  {
    chainId: 137,
    address: "0x3a9a81d576d83ff21f26f325066054540720fc34",
    name: "Streamr",
    symbol: "DATA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17869/thumb/DATA_new_symbol_3x.png?1629692324",
  },
  {
    chainId: 137,
    address: "0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8",
    name: "Riot Racers",
    symbol: "RIOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19238/thumb/jyxvIbmJ_400x400.png?1634774849",
  },
  {
    chainId: 137,
    address: "0x4af5ff1a60a6ef6c7c8f9c4e304cd9051fca3ec0",
    name: "Rigel Protocol",
    symbol: "RGP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15837/thumb/A_qRYvB2_400x400.png?1622080940",
  },
  {
    chainId: 137,
    address: "0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39",
    name: "SporkDAO",
    symbol: "SPORK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23358/thumb/sporkdao.PNG?1643942687",
  },
  {
    chainId: 137,
    address: "0xe58e8391ba17731c5671f9c6e00e420608dca10e",
    name: "GNFT",
    symbol: "GNFT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23532/thumb/gnft_200x200.png?1644386728",
  },
  {
    chainId: 137,
    address: "0x43df9c0a1156c96cea98737b511ac89d0e2a1f46",
    name: "CVI",
    symbol: "GOVI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13875/thumb/GOVI.png?1612451531",
  },
  {
    chainId: 137,
    address: "0x8839e639f210b80ffea73aedf51baed8dac04499",
    name: "DecentraWeb",
    symbol: "DWEB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18971/thumb/dweb-logo-transparent.png?1634082358",
  },
  {
    chainId: 137,
    address: "0x180cfbe9843d79bcafcbcdf23590247793dfc95b",
    name: "PolkaFantasy",
    symbol: "XP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18299/thumb/XP_Token_Icon.png?1631498467",
  },
  {
    chainId: 137,
    address: "0x2ebd50ae084e71eed419cb6c620b3bbd3927bf7e",
    name: "Moon Rabbit",
    symbol: "AAA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17310/thumb/logo_moon_no_inscriptions-01.png?1627275874",
  },
  {
    chainId: 137,
    address: "0x2bc07124d8dac638e290f401046ad584546bc47b",
    name: "Tower",
    symbol: "TOWER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14134/thumb/tower-circular-1000.png?1632195469",
  },
  {
    chainId: 137,
    address: "0x55555555a687343c6ce28c8e1f6641dc71659fad",
    name: "XY Finance",
    symbol: "XY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21541/thumb/xy.png?1639913622",
  },
  {
    chainId: 137,
    address: "0x6a335ac6a3cdf444967fe03e7b6b273c86043990",
    name: "GhostMarket",
    symbol: "GM",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/22765/thumb/gm.png?1642574907",
  },
  {
    chainId: 137,
    address: "0x784641e51c300120a8d15bfdb3b45375d4352748",
    name: "WIVA",
    symbol: "WIVA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18142/thumb/n8Vu43vs.png?1630656531",
  },
  {
    chainId: 137,
    address: "0x432cdbc749fd96aa35e1dc27765b23fdcc8f5cf1",
    name: "Envelop  Niftsy ",
    symbol: "NIFTSY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19161/thumb/logo200x200.png?1643188130",
  },
  {
    chainId: 137,
    address: "0x2f1b1662a895c6ba01a99dcaf56778e7d77e5609",
    name: "SpiceUSD",
    symbol: "USDS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25697/thumb/USDS.png?1653440948",
  },
  {
    chainId: 137,
    address: "0x8d520c8e66091cfd6743fe37fbe3a09505616c4b",
    name: "Cosplay Token",
    symbol: "COT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21294/thumb/brave_ZxsjzUc8xn.png?1638874098",
  },
  {
    chainId: 137,
    address: "0x4a7b9a4589a88a06ca29f99556db08234078d727",
    name: "NFTmall",
    symbol: "GEM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16217/thumb/Icon-1000x1000.png?1623316471",
  },
  {
    chainId: 137,
    address: "0x14af1f2f02dccb1e43402339099a05a5e363b83c",
    name: "Kromatika",
    symbol: "KROM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20541/thumb/KROM_Transparent.png?1641398421",
  },
  {
    chainId: 137,
    address: "0xee9801669c6138e84bd50deb500827b776777d28",
    name: "O3 Swap",
    symbol: "O3",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15460/thumb/o3.png?1620904316",
  },
  {
    chainId: 137,
    address: "0xc46a37fbbe433ef24bc7b9388c8728ddcf3ca87c",
    name: "Mainstream For The Underground",
    symbol: "MFTU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/5519/thumb/Mainstream_for_the_underground.png?1534426154",
  },
  {
    chainId: 137,
    address: "0xa5ff48e326958e0ce6fdf9518de561f2b5f57da3",
    name: "Lokr",
    symbol: "LKR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14692/thumb/lokr.png?1648886932",
  },
  {
    chainId: 137,
    address: "0x1581929770be3275a82068c1135b6dd59c5334ed",
    name: "Alium Finance",
    symbol: "ALM",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15621/thumb/alium.png?1655449806",
  },
  {
    chainId: 137,
    address: "0xd3b71117e6c1558c1553305b44988cd944e97300",
    name: "Yel Finance",
    symbol: "YEL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17429/thumb/Logo200.png?1627613989",
  },
  {
    chainId: 137,
    address: "0x60138efceb1f7d8e10c8cb89bb61bbdbeebb4ffc",
    name: "Rice Wallet",
    symbol: "RICE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17204/thumb/RICE-200x200.png?1626847877",
  },
  {
    chainId: 137,
    address: "0xa4ce4a467e51aefec683a649c3f14427f104667f",
    name: "Onston",
    symbol: "ONSTON",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20669/thumb/onston.PNG?1637547859",
  },
  {
    chainId: 137,
    address: "0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a",
    name: "Scalara NFT Index",
    symbol: "NFTI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23647/thumb/NFTI-logo-white-bg.png?1644910969",
  },
  {
    chainId: 137,
    address: "0xcf403036bc139d30080d2cf0f5b48066f98191bb",
    name: "Stobox",
    symbol: "STBU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12637/thumb/exchange.png?1623764906",
  },
  {
    chainId: 137,
    address: "0x7f4e04aa61b9a46403c1634e91bf31df3bc554cf",
    name: "WSB sh",
    symbol: "WSBT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23920/thumb/_SjqfFvj_400x400.png?1645686742",
  },
  {
    chainId: 137,
    address: "0xa41ee9a01fd417c372b318746d8891c0c240a73c",
    name: "Endless Battlefield",
    symbol: "EB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23981/thumb/eb.png?1645878954",
  },
  {
    chainId: 137,
    address: "0x3a549866a592c81719f3b714a356a8879e20f5d0",
    name: "YouLiveEveryday",
    symbol: "ULE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26951/thumb/20220819_225616_0000.png?1660987632",
  },
  {
    chainId: 137,
    address: "0x086373fad3447f7f86252fb59d56107e9e0faafa",
    name: "Yup",
    symbol: "YUP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12322/thumb/photo_2021-10-26_00-47-35.jpg?1635227479",
  },
  {
    chainId: 137,
    address: "0xd2a2a353d28e4833faffc882f6649c9c884a7d8f",
    name: "EmiSwap",
    symbol: "ESW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17526/thumb/Emiswap_Logo_light_colour_horizontal.png?1628114900",
  },
  {
    chainId: 137,
    address: "0x538d47d142f6993038a667e9d6210d3735749b36",
    name: "Burp",
    symbol: "BURP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17317/thumb/Big_Town_Chef_-__BURP_-_Avatar_3x.png?1646202255",
  },
  {
    chainId: 137,
    address: "0xcc081220542a60a8ea7963c4f53d522b503272c1",
    name: "NFTY Labs",
    symbol: "NFTY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18741/thumb/logo_%281%29.png?1643188469",
  },
  {
    chainId: 137,
    address: "0x4535e52cdf3ab787b379b7b72b5990767e6747e4",
    name: "Mytrade",
    symbol: "MYT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24134/thumb/transparent_logo.png?1646543530",
  },
  {
    chainId: 137,
    address: "0xe580074a10360404af3abfe2d524d5806d993ea3",
    name: "PayBolt",
    symbol: "PAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24175/thumb/logo.png?1646748269",
  },
  {
    chainId: 137,
    address: "0xf915fdda4c882731c0456a4214548cd13a822886",
    name: "Fuse",
    symbol: "FUSE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/10347/thumb/vUXKHEe.png?1601523640",
  },
  {
    chainId: 137,
    address: "0xf6f85b3f9fd581c2ee717c404f7684486f057f95",
    name: "Nord Finance",
    symbol: "NORD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13630/thumb/nord.jpg?1610465136",
  },
  {
    chainId: 137,
    address: "0xbc91347e80886453f3f8bbd6d7ac07c122d87735",
    name: "Banana",
    symbol: "BANANA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17521/thumb/banana-token-cg.png?1646285527",
  },
  {
    chainId: 137,
    address: "0x3c205c8b3e02421da82064646788c82f7bd753b9",
    name: "PureFi",
    symbol: "UFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17341/thumb/purefi.PNG?1627362147",
  },
  {
    chainId: 137,
    address: "0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590",
    name: "Stargate Finance",
    symbol: "STG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24413/thumb/STG_LOGO.png?1647654518",
  },
  {
    chainId: 137,
    address: "0x0b91b07beb67333225a5ba0259d55aee10e3a578",
    name: "Minereum",
    symbol: "MNE",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/702/thumb/mne.png?1587615060",
  },
  {
    chainId: 137,
    address: "0xe0cca86b254005889ac3a81e737f56a14f4a38f5",
    name: "Alta Finance",
    symbol: "ALTA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18713/thumb/AFN-token-Altafin-200.png?1633079552",
  },
  {
    chainId: 137,
    address: "0x4fafad147c8cd0e52f83830484d164e960bdc6c3",
    name: "Qawalla",
    symbol: "QWLA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15242/thumb/qwla.png?1648268288",
  },
  {
    chainId: 137,
    address: "0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff",
    name: "Aave CRV",
    symbol: "ACRV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17250/thumb/aCRV_2x.png?1626941642",
  },
  {
    chainId: 137,
    address: "0x91c5a5488c0decde1eacd8a4f10e0942fb925067",
    name: "Auditchain",
    symbol: "AUDT",
    decimals: 17,
    logoURI:
      "https://assets.coingecko.com/coins/images/6398/thumb/auditchain.png?1547042519",
  },
  {
    chainId: 137,
    address: "0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4",
    name: "Lido Staked Matic",
    symbol: "STMATIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24185/thumb/stMATIC.png?1646789287",
  },
  {
    chainId: 137,
    address: "0xa1388e73c51b37383b1ab9dce8317ef5a0349cc5",
    name: "Shibaverse",
    symbol: "VERSE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18407/thumb/logo_200.png?1631795328",
  },
  {
    chainId: 137,
    address: "0x164caf66c45e483f7ee647ccad275b35b4c75719",
    name: "Kenshi",
    symbol: "KENSHI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21904/thumb/32x32_%281%29.png?1654588618",
  },
  {
    chainId: 137,
    address: "0x4c9f66b2806538cf00ef596e09fb05bcb0d17dc8",
    name: "Minato",
    symbol: "MNTO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24622/thumb/MNTO_200x200.png?1648448664",
  },
  {
    chainId: 137,
    address: "0x9a06db14d639796b25a6cec6a1bf614fd98815ec",
    name: "Panther Protocol",
    symbol: "ZKP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18611/thumb/1_FVXTRf8HogOiXOQDzonE5g.png?1653199708",
  },
  {
    chainId: 137,
    address: "0x625e7708f30ca75bfd92586e17077590c60eb4cd",
    name: "Aave USDC",
    symbol: "AUSDC",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/14318/thumb/aUSDC.e260d492.png?1615527797",
  },
  {
    chainId: 137,
    address: "0x6ab707aca953edaefbc4fd23ba73294241490620",
    name: "Aave USDT",
    symbol: "AUSDT",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/14243/thumb/aUSDT.78f5faae.png?1615528400",
  },
  {
    chainId: 137,
    address: "0x82e64f49ed5ec1bc6e43dad4fc8af9bb3a2312ee",
    name: "Aave DAI",
    symbol: "ADAI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14242/thumb/aDAI.84b6c41f.png?1615528749",
  },
  {
    chainId: 137,
    address: "0x191c10aa4af7c30e871e70c95db0e4eb77237530",
    name: "Aave LINK",
    symbol: "ALINK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14315/thumb/aLINK.412c6589.png?1615527827",
  },
  {
    chainId: 137,
    address: "0xe50fa9b3c56ffb159cb0fca61f5c9d750e8128c8",
    name: "Aave WETH",
    symbol: "AWETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17238/thumb/aWETH_2x.png?1626940782",
  },
  {
    chainId: 137,
    address: "0x078f358208685046a11c85e8ad32895ded33a249",
    name: "Aave WBTC",
    symbol: "AWBTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/14244/thumb/aWBTC.41453c2a.png?1615528721",
  },
  {
    chainId: 137,
    address: "0x12365293cb6477d4fc2686e46bb97e3fb64f1550",
    name: "Citizen Finance",
    symbol: "CIFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24255/thumb/cifi.png?1647157454",
  },
  {
    chainId: 137,
    address: "0xe613a914bbb433855378183c3ab13003285da40a",
    name: "Bit2Me",
    symbol: "B2M",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19848/thumb/b2m-circle-solid-default.png?1636036332",
  },
  {
    chainId: 137,
    address: "0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b",
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12559/thumb/coin-round-red.png?1604021818",
  },
  {
    chainId: 137,
    address: "0xacd4e2d936be9b16c01848a3742a34b3d5a5bdfa",
    name: "Mechanium",
    symbol: "MECHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24374/thumb/w4K4OOMo_400x400.jpg?1647940092",
  },
  {
    chainId: 137,
    address: "0x405ce8b2eaeea7d4ba5fc160848cb2a6569e03f0",
    name: "Metria Network",
    symbol: "METR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24870/thumb/Metria-logo_1.png?1649213114",
  },
  {
    chainId: 137,
    address: "0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    name: "Lido DAO",
    symbol: "LDO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13573/thumb/Lido_DAO.png?1609873644",
  },
  {
    chainId: 137,
    address: "0x501ace9c35e60f03a2af4d484f49f9b1efde9f40",
    name: "SOLACE",
    symbol: "SOLACE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21277/thumb/IMG_6599.png?1638862378",
  },
  {
    chainId: 137,
    address: "0x0a307bd521701f9d70fb29bfa9e2e36dc998dadb",
    name: "CoinWealth",
    symbol: "CNW",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/23769/thumb/cw_logo-4955f59a5c8079f246fa07ac71b2541870ca7d906ca1d9c26d74a3870fafef2f_%281%29.png?1645425522",
  },
  {
    chainId: 137,
    address: "0xc17c30e98541188614df99239cabd40280810ca3",
    name: "EverRise",
    symbol: "RISE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16367/thumb/Logo_EverRise_Icon_logo.png?1642576670",
  },
  {
    chainId: 137,
    address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
    name: "Elk Finance",
    symbol: "ELK",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17813/thumb/elk.png?1629336971",
  },
  {
    chainId: 137,
    address: "0xe6b9d092223f39013656702a40dbe6b7decc5746",
    name: "RealFevr",
    symbol: "FEVR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17136/thumb/Fevr-Token.png?1626869849",
  },
  {
    chainId: 137,
    address: "0x16b3e050e9e2f0ac4f1bea1b3e4fdc43d7f062dd",
    name: "Sombra",
    symbol: "SMBR",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/17884/thumb/sombra-200.png?1629710204",
  },
  {
    chainId: 137,
    address: "0x2596a8b90d39eb89d5668ca5b6dee54e9ae3d4c0",
    name: "TattooMoney",
    symbol: "TAT2",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24772/thumb/logo_200x200.png?1649835408",
  },
  {
    chainId: 137,
    address: "0x11a1779ae6b02bb8e7ff847919bca3e55bcbb3d5",
    name: "Paper",
    symbol: "PAPER",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23510/thumb/PAPERLOGOCryptoLink1-1.png?1669717863",
  },
  {
    chainId: 137,
    address: "0xc3f56d567e7663e8932e65d85ae4be7eb5575ca7",
    name: "Faith Tribe",
    symbol: "FTRB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23939/thumb/ym1Hf4x2_400x400.jpg?1645766940",
  },
  {
    chainId: 137,
    address: "0xf50d05a1402d0adafa880d36050736f9f6ee7dee",
    name: "Instadapp",
    symbol: "INST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14688/thumb/30hFM0-n_400x400.jpg?1617786420",
  },
  {
    chainId: 137,
    address: "0xafcdd4f666c84fed1d8bd825aa762e3714f652c9",
    name: "Vita Inu",
    symbol: "VINU",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20594/thumb/vita-inu-head-wallet-icon-transparent.png?1637286122",
  },
  {
    chainId: 137,
    address: "0xcca3e26be51b8905f1a01872524f17eb55bd02fb",
    name: "Parabolic",
    symbol: "PARA",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/25187/thumb/LHh3hHnQ_400x400.jpg?1650600695",
  },
  {
    chainId: 137,
    address: "0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762",
    name: "Request",
    symbol: "REQ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/1031/thumb/Request_icon_green.png?1643250951",
  },
  {
    chainId: 137,
    address: "0x61aee582896064ecd5d85d66a32ddeb5574a699d",
    name: "Hyve",
    symbol: "HYVE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13072/thumb/bAe1G-lD_400x400.png?1654056255",
  },
  {
    chainId: 137,
    address: "0x692c44990e4f408ba0917f5c78a83160c1557237",
    name: "Thales",
    symbol: "THALES",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/18388/thumb/CLVZJN_C_400x400.png?1631758808",
  },
  {
    chainId: 137,
    address: "0x4fb71290ac171e1d144f7221d882becac7196eb5",
    name: "BiLira",
    symbol: "TRYB",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/10119/thumb/JBs9jiXO_400x400.jpg?1642668342",
  },
  {
    chainId: 137,
    address: "0x32cd1bcb75473845b5d1db6ece60aec6e41d8518",
    name: "POLYSPORTS",
    symbol: "PS1",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25070/thumb/L-T2x_cG_400x400.jpg?1650024620",
  },
  {
    chainId: 137,
    address: "0xa96d47c621a8316d4f9539e3b38180c7067e84ca",
    name: "AurusSILVER",
    symbol: "AWS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14965/thumb/2021-12-06-Aurus-tokens-for-coingecko-AWS-flat-color-v1-r1-AS.png?1640223368",
  },
  {
    chainId: 137,
    address: "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
    name: "Stader MaticX",
    symbol: "MATICX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25383/thumb/6GWyFVHD_400x400.jpg?1651615396",
  },
  {
    chainId: 137,
    address: "0xa14c04dea16798aa8f25b1da583cd5fbbfd6579e",
    name: "Polychain Monsters Genesis",
    symbol: "PMLG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25396/thumb/19329.png?1651710855",
  },
  {
    chainId: 137,
    address: "0x0a3bb08b3a15a19b4de82f8acfc862606fb69a2d",
    name: "iZUMi Bond USD",
    symbol: "IUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25388/thumb/iusd-logo-symbol-10k%E5%A4%A7%E5%B0%8F.png?1651660620",
  },
  {
    chainId: 137,
    address: "0x388d819724dd6d71760a38f00dc01d310d879771",
    name: "JustMoney",
    symbol: "JM",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/25450/thumb/jm.png?1651803017",
  },
  {
    chainId: 137,
    address: "0x9767203e89dcd34851240b3919d4900d3e5069f1",
    name: "A4 Finance",
    symbol: "A4",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/21992/thumb/ba384ad07217a4be75cb85314f5760f7.jpg?1640582786",
  },
  {
    chainId: 137,
    address: "0xd30dc92b8ec0fa8de625768d208f51a93c10aff2",
    name: "CelsiusX Wrapped BTC",
    symbol: "CXBTC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25535/thumb/cxBTC.png?1652252129",
  },
  {
    chainId: 137,
    address: "0xeeda694439c6fb56cbaa011cc849650b7273285b",
    name: "Bankless BED Index",
    symbol: "BED",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17175/thumb/BED_Logo_-_No_border.png?1626833695",
  },
  {
    chainId: 137,
    address: "0xb5b8381b67248f832c7961bd265f021cd8d291a4",
    name: "Zelwin",
    symbol: "ZLW",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11547/thumb/5614.png?1590991128",
  },
  {
    chainId: 137,
    address: "0x431d5dff03120afa4bdf332c61a6e1766ef37bdb",
    name: "JPY Coin",
    symbol: "JPYC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25971/thumb/JPYC_logo_3D_cmyk_0-1_%282%29.jpg?1667467959",
  },
  {
    chainId: 137,
    address: "0xed28b1890fbb4aa9ded528c1034fed278ff68f5d",
    name: "Vabble",
    symbol: "VAB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17508/thumb/vabble_tplogo_200_x_200.png?1628508875",
  },
  {
    chainId: 137,
    address: "0x221743dc9e954be4f86844649bf19b43d6f8366d",
    name: "Obortech",
    symbol: "OBOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14929/thumb/OBORTECH_200.png?1619070515",
  },
  {
    chainId: 137,
    address: "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
    name: "JPY Coin v1",
    symbol: "JPYC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17277/thumb/WoZ8rruL_400x400.png?1627016492",
  },
  {
    chainId: 137,
    address: "0x101a023270368c0d50bffb62780f4afd4ea79c35",
    name: "Ankr",
    symbol: "ANKR",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png?1608111978",
  },
  {
    chainId: 137,
    address: "0x31a0d1a199631d244761eeba67e8501296d2e383",
    name: "renZEC",
    symbol: "RENZEC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/11564/thumb/Zcash.jpg?1628072865",
  },
  {
    chainId: 137,
    address: "0x46ab9e9153446d4016bcc3b6d4f6920d8b24e434",
    name: "Infinite Arcade TIC",
    symbol: "TIC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25919/thumb/VNReVzc5Sg6NqHONgxEQ_4BI9yq3820sYQx0R.jpg?1654593140",
  },
  {
    chainId: 137,
    address: "0x9e6b19874e97fe8e8cad77f2c0ab5e7a693e5dbf",
    name: "StrongHands Finance",
    symbol: "ISHND",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20158/thumb/ISHND_512x512px.png?1647512898",
  },
  {
    chainId: 137,
    address: "0x0c9b3ab1bd0cf0745625381f5c3aa1cd9bbc7abb",
    name: "Exeno Coin",
    symbol: "EXN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25845/thumb/20323.png?1654145185",
  },
  {
    chainId: 137,
    address: "0x79637d860380bd28df5a07329749654790fac1df",
    name: "Plato Game",
    symbol: "PLATO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24725/thumb/16085.png?1648700698",
  },
  {
    chainId: 137,
    address: "0x534f39c5f4df9cb13e16b24ca07c7c8c0e2eadb7",
    name: "Safe Haven",
    symbol: "SHA",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/2584/thumb/safehaven.png?1620037471",
  },
  {
    chainId: 137,
    address: "0x0ae1daf8329923cce587e994df500a8f1dd5fc6f",
    name: "XPOP",
    symbol: "XPOP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26251/thumb/%EC%9E%90%EC%82%B0_1.png?1656936169",
  },
  {
    chainId: 137,
    address: "0x564906ec1df8399f00e4ad32c0ecac0404a27a1c",
    name: "Ambire Wallet",
    symbol: "WALLET",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23154/thumb/wallet.PNG?1643352408",
  },
  {
    chainId: 137,
    address: "0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35",
    name: "MASQ",
    symbol: "MASQ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13699/thumb/masq.png?1648364813",
  },
  {
    chainId: 137,
    address: "0xfafa220145dfa5c3ec85b6fa8a75aee2451cde5e",
    name: "Roobee",
    symbol: "ROOBEE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/8791/thumb/Group_11.png?1580344629",
  },
  {
    chainId: 137,
    address: "0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7",
    name: "Nest Protocol",
    symbol: "NEST",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/11284/thumb/52954052.png?1589868539",
  },
  {
    chainId: 137,
    address: "0x013f9c3fac3e2759d7e90aca4f9540f75194a0d7",
    name: "Neutrino USD",
    symbol: "USDN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/10117/thumb/78GWcZu.png?1600845716",
  },
  {
    chainId: 137,
    address: "0x3d1d2afd191b165d140e3e8329e634665ffb0e5e",
    name: "Deri Protocol",
    symbol: "DERI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13931/thumb/200vs200.jpg?1627649443",
  },
  {
    chainId: 137,
    address: "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05",
    name: "Gelato",
    symbol: "GEL",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15026/thumb/Gelato_Icon_Logo_1024x1024.png?1619491717",
  },
  {
    chainId: 137,
    address: "0x03c2f6808502ffd4ab2787ad1a98ec13dbd5718b",
    name: "ClinTex CTi",
    symbol: "CTI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13266/thumb/CTI.png?1606817542",
  },
  {
    chainId: 137,
    address: "0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6",
    name: "ICHI",
    symbol: "ICHI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/13119/thumb/ICHI_%28Round%29.jpg?1614308761",
  },
  {
    chainId: 137,
    address: "0xc88640b734fea3b35c132fe757aeb5ca6c8cdc66",
    name: "Nexum",
    symbol: "NEXM",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/23472/thumb/200_-_200_coinmarketcap.png?1644218225",
  },
  {
    chainId: 137,
    address: "0x06ebc9c542357e2129d16717cd02c02fbc835d33",
    name: "Coinage Finance",
    symbol: "CAGE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22300/thumb/Coinage_v2_200x200_white.png?1653464214",
  },
  {
    chainId: 137,
    address: "0x3fb256cfefedb6a54de7465c0ee86dc574ae464d",
    name: "Emanate",
    symbol: "EMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/4152/thumb/emanate.png?1558422824",
  },
  {
    chainId: 137,
    address: "0xadbe0eac80f955363f4ff47b0f70189093908c04",
    name: "MetalSwap",
    symbol: "XMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22075/thumb/xmt.png?1640943637",
  },
  {
    chainId: 137,
    address: "0xc5b57e9a1e7914fda753a88f24e5703e617ee50c",
    name: "Popcorn",
    symbol: "POP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21438/thumb/pop-1_200_x_200.png?1662607611",
  },
  {
    chainId: 137,
    address: "0xa4e26bd6dcba9021dcd3a1159ba52e97cd770b8a",
    name: "Babylonia",
    symbol: "BABY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26352/thumb/Babylonia_Logo_02.01_FFD42A_200px.png?1657590351",
  },
  {
    chainId: 137,
    address: "0x1cd2528522a17b6be63012fb63ae81f3e3e29d97",
    name: "Mind Music",
    symbol: "MND",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/19104/thumb/logo-main_%282%29.png?1634506312",
  },
  {
    chainId: 137,
    address: "0x8a6f1738b2ff63c7c29f7e2b0073d96c839b0b23",
    name: "Dog Tag",
    symbol: "TAG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26418/thumb/TAG_PNG.png?1657926565",
  },
  {
    chainId: 137,
    address: "0x48128d062e44364d4c277d9aed71d7f53977937b",
    name: "Webpay",
    symbol: "PAY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26429/thumb/logo.jpg?1657930482",
  },
  {
    chainId: 137,
    address: "0x1d734a02ef1e1f5886e66b0673b71af5b53ffa94",
    name: "Stader",
    symbol: "SD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20658/thumb/sd.png?1642927667",
  },
  {
    chainId: 137,
    address: "0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed",
    name: "Axelar USDC",
    symbol: "AXLUSDC",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/26476/thumb/axlUSDC.png?1658207579",
  },
  {
    chainId: 137,
    address: "0xfe457497a2a71bce1eb93ea9e6a685057dd93dee",
    name: "BNSD Finance",
    symbol: "BNSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/12368/thumb/bnsd.png?1599358388",
  },
  {
    chainId: 137,
    address: "0xbcd2c5c78000504efbc1ce6489dfcac71835406a",
    name: "Arch Ethereum Web3",
    symbol: "WEB3",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26562/thumb/WEB3-TOKEN.png?1658798344",
  },
  {
    chainId: 137,
    address: "0xeafe31cd9e8e01c8f0073a2c974f728fb80e9dce",
    name: "NZD Stablecoin",
    symbol: "NZDS",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/20394/thumb/nzds.png?1636964381",
  },
  {
    chainId: 137,
    address: "0x9d934de468689e07d3d6e1c6ee2093d5acbfd90c",
    name: "Amgen",
    symbol: "AMG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25291/thumb/WorYFccvCfc0SQzHHCSJyVHyE7StfNOVU9NajqXcKv3G7hvinJGlISSFBgjuamai1N6aZTUCuDQD8Lm2Nod2loHKAedAtagu-DNv_r7PlxyiAr8pP6TqPHRwmLMkYeVIMAXjUIZtDwS8B1WKLdM1qYfbZb6_9aMD9WMEh2g58Oa2tac0Y1HPSy_Q1ZGIFXSMntGbeRs2-fqMPLjeFztRR0_%281%29.jpg?1651132162",
  },
  {
    chainId: 137,
    address: "0xe52509181feb30eb4979e29ec70d50fd5c44d590",
    name: "ARTH",
    symbol: "ARTH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/16876/thumb/ARTH_Token.png?1625651538",
  },
  {
    chainId: 137,
    address: "0xd7ecf95cf7ef5256990beaf4ac895cd9e64cb947",
    name: "pTokens BTC",
    symbol: "PBTC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25861/thumb/wMTpRljt_400x400.png?1654228097",
  },
  {
    chainId: 137,
    address: "0x411be1e071675df40fe1c08ca760bb7aa707cedf",
    name: "Gamerse",
    symbol: "LFG",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19582/thumb/gamerse.PNG?1635470285",
  },
  {
    chainId: 137,
    address: "0x86a298581388bc199e61bfecdca8ea22cf6c0da3",
    name: "DELOT IO",
    symbol: "DELOT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25561/thumb/Logo_200.png?1654230685",
  },
  {
    chainId: 137,
    address: "0x76a15a8628ce4c66629ea964f8dc796a8159170b",
    name: "RematicEGC",
    symbol: "RMTX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21240/thumb/Rematic_Circle_Logo_200x200.png?1647851612",
  },
  {
    chainId: 137,
    address: "0x218645f85ff27fc456ef46c3cdacbf5c40b2f9e8",
    name: "Joystick club",
    symbol: "JOY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21473/thumb/android-chrome-192x192.png?1639349299",
  },
  {
    chainId: 137,
    address: "0xda43bfd7ecc6835aa6f1761ced30b986a574c0d2",
    name: "deUSDC",
    symbol: "DEUSDC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26669/thumb/deUSDC.png?1659509853",
  },
  {
    chainId: 137,
    address: "0xe94845ac6782a2e71c407abe4d5201445c26a62b",
    name: "BUILD",
    symbol: "BUILD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26533/thumb/BUILD.png?1658714842",
  },
  {
    chainId: 137,
    address: "0x475db18d764df7fadfbd3e73fccbbc1e14342ab3",
    name: "ApolloFi",
    symbol: "APO",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26451/thumb/apo.png?1660311541",
  },
  {
    chainId: 137,
    address: "0x6cd6cb131764c704ba9167c29930fbdc38901ab7",
    name: "xWIN Finance",
    symbol: "XWIN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/15400/thumb/200x200_%28transparent_background%29.png?1622515538",
  },
  {
    chainId: 137,
    address: "0xbf9f916bbda29a7f990f5f55c7607d94d7c3a60b",
    name: "DEFY",
    symbol: "DEFY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26877/thumb/8ybr83fb0ca45cm1yvrcaclwbvcp.jpeg?1660622066",
  },
  {
    chainId: 137,
    address: "0x37129b96896891e56bc099540fe7d1841005a367",
    name: "SpiceEURO",
    symbol: "EUROS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26443/thumb/E4B6C93A-E2A1-4F53-BB26-15D0FE802812.png?1658110215",
  },
  {
    chainId: 137,
    address: "0xca5e32d44f1744001b5600dc2f5f5e0bbb6e9d3e",
    name: "Richverse",
    symbol: "RIV",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26892/thumb/WechatIMG2340.jpeg?1660708132",
  },
  {
    chainId: 137,
    address: "0x011734f6ed20e8d011d85cf7894814b897420acf",
    name: "Arable Protocol",
    symbol: "ACRE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23659/thumb/acre_token-02.png?1644989289",
  },
  {
    chainId: 137,
    address: "0xb66930d1299eaf9f6b8354c539e5f83b75794ac4",
    name: "Inflation Adjusted EURO",
    symbol: "IEUROS",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26442/thumb/894CE468-A364-42BA-83B0-60A7CA859614.png?1658110157",
  },
  {
    chainId: 137,
    address: "0x03a97594aa5ece130e2e956fc0ced2fea8ed8989",
    name: "Ankr MATIC Reward Earning Bond",
    symbol: "AMATICB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26096/thumb/aMATICb.png?1658821076",
  },
  {
    chainId: 137,
    address: "0xb7b31a6bc18e48888545ce79e83e06003be70930",
    name: "ApeCoin",
    symbol: "APE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24383/thumb/apecoin.jpg?1647476455",
  },
  {
    chainId: 137,
    address: "0xdc3326e71d45186f113a2f448984ca0e8d201995",
    name: "XSGD",
    symbol: "XSGD",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/12832/thumb/StraitsX_Singapore_Dollar_%28XSGD%29_Token_Logo.png?1633936813",
  },
  {
    chainId: 137,
    address: "0xa91fe5a535967f52d3abebdffb3b306d964ace13",
    name: "Sandclock",
    symbol: "QUARTZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/19368/thumb/sandclock.jpg?1635132501",
  },
  {
    chainId: 137,
    address: "0x16d63619cd67b15ff822bfeb60388a226d2e452b",
    name: "Goons of Balatroon",
    symbol: "GOB",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27104/thumb/q1_hZykF_400x400.jpeg?1662006909",
  },
  {
    chainId: 137,
    address: "0xb08ba4ad6bc291f4f1e79c4c7f9395141b8d5797",
    name: "INTDESTCOIN  OLD ",
    symbol: "INTD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27134/thumb/INTD.png?1662025876",
  },
  {
    chainId: 137,
    address: "0x77d97db5615dfe8a2d16b38eaa3f8f34524a0a74",
    name: "Lunafi",
    symbol: "LFI",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24594/thumb/lfi.png?1648310927",
  },
  {
    chainId: 137,
    address: "0xa3bac05723c35aa0b30ea63f5a5e9986465a9391",
    name: "Echelon",
    symbol: "ECH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/25498/thumb/SpO_F8a0_400x400.jpg?1652077746",
  },
  {
    chainId: 137,
    address: "0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd",
    name: "Wombat",
    symbol: "WOMBAT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/26430/thumb/Project_Page_Icon.png?1657930951",
  },
  {
    chainId: 137,
    address: "0xee65d8b88f86ace0f7ba42ba2d2c679b6f604bf0",
    name: "Tazor",
    symbol: "TAZOR",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/27261/thumb/tazor.png?1663554021",
  },
  {
    chainId: 137,
    address: "0x2cc58c81cfd3958e268bc68d3dda08fd4e17977c",
    name: "FLYPE DAO",
    symbol: "FLYP",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27283/thumb/FLYPE_LOGO_200X200.jpg?1663140374",
  },
  {
    chainId: 137,
    address: "0x7f280dac515121dcda3eac69eb4c13a52392cace",
    name: "Fancy Games",
    symbol: "FNC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/21367/thumb/fnc.png?1639025576",
  },
  {
    chainId: 137,
    address: "0x68ee0d0aad9e1984af85ca224117e4d20eaf68be",
    name: "Crypto Royale",
    symbol: "ROY",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/20668/thumb/ROY_logo_new_design_small.png?1637547627",
  },
  {
    chainId: 137,
    address: "0x189586b5f6317538ae50c20a976597da38984a24",
    name: "ChainPort",
    symbol: "PORTX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24490/thumb/VE-tUL-q_400x400.png?1647855096",
  },
  {
    chainId: 137,
    address: "0xa3c53b53fe43083aa31c6f32ffe90c4d91b44391",
    name: "Sportzchain",
    symbol: "SPN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/24915/thumb/Sportzchain_logo_195_195.png?1650240200",
  },
  {
    chainId: 137,
    address: "0x2c826035c1c36986117a0e949bd6ad4bab54afe2",
    name: "XIDR",
    symbol: "XIDR",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/21126/thumb/XIDR_Logo_256_X_256.png?1638343133",
  },
  {
    chainId: 137,
    address: "0x18104f8e31786f0f519ff59d1b24c31a2f8fef40",
    name: "ScarpaCoin",
    symbol: "SC",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/27456/thumb/ScarpaCoin_Logo.png?1664100906",
  },
  {
    chainId: 137,
    address: "0x6e4e624106cb12e168e6533f8ec7c82263358940",
    name: "Axelar",
    symbol: "AXL",
    decimals: 6,
    logoURI:
      "https://assets.coingecko.com/coins/images/27277/thumb/V-65_xQ1_400x400.jpeg?1663121730",
  },
  {
    chainId: 137,
    address: "0x1a763170b96f23f15576d0fa0b2619d1254c437d",
    name: "AurusX",
    symbol: "AX",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27871/thumb/AurusX_token_2D.jpg?1666165444",
  },
  {
    chainId: 137,
    address: "0x9a6469aac7cd70385bdca6fa9e9356acec9c5b16",
    name: "SNKRZ",
    symbol: "SKZ",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27657/thumb/skz_200_200.png?1665099924",
  },
  {
    chainId: 137,
    address: "0x17757dce604899699b79462a63dad925b82fe221",
    name: "GrapeSwap Finance",
    symbol: "GRAPE",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27694/thumb/grape.png?1665240188",
  },
  {
    chainId: 137,
    address: "0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6",
    name: "DeRace",
    symbol: "DERC",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17438/thumb/DERC_logo_coingecko.png?1665714278",
  },
  {
    chainId: 137,
    address: "0x23001f892c0c82b79303edc9b9033cd190bb21c7",
    name: "Liquity USD",
    symbol: "LUSD",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/14666/thumb/Group_3.png?1617631327",
  },
  {
    chainId: 137,
    address: "0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e",
    name: "XEN Crypto",
    symbol: "XEN",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/27713/thumb/Xen.jpeg?1665453190",
  },
];

export default dummyTokens;
