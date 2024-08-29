const config = [
  {
    chainId: 252,
    chainName: "Fraxtal",
    isBase: true,
    rpcUrl: "https://rpc.frax.com",
    wsUrl: "wss://fraxtal.gateway.tenderly.co/6nYwV9MvqqqMcfLf66GD1E",
    explorerUrl: "https://fraxscan.com",
    faucetUrl: "https://mainnet.frax.com/tools/bridge/deposit",
    convert_id: "2781",
    id: "23225",
    symbol: "frxETH",
    logo: "/tokens/frax-logo.svg",
    addresses: {
      Fusion: "0xd17Dd62290EcdEa48e5029a4fBd519245C911c19",
      FusionForwarder: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
      FactoryForwarder: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
      FusionProxyFactory: "0x44950f083691828A07c17d2A927B435e8B272F6D",
      FusionVault: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
      FusionGasTank: "0xA2d6267B5b167Ee27174BfDa808408F90391D949",
      PasswordVerifier: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
      SignatureVerifier: "0xE34906Eda6Cf2cafFa1d567523C7954fDf9E80E0",
    },
    tokens: [
      {
        name: "frxETH",
        symbol: "frxETH",
        address: null,
        convert_id: "23225",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/frxeth-logo.svg",
      },
      {
        name: "Frax",
        symbol: "Frax",
        address: "0xFc00000000000000000000000000000000000001",
        convert_id: "6952",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/frax-logo.svg",
      },
      {
        name: "sfrxETH",
        symbol: "sfrxETH",
        address: "0xFC00000000000000000000000000000000000005",
        convert_id: "23117",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/sfrxeth-logo.svg",
      },
    ],
  },
  {
    chainId: 10,
    chainName: "Optimism",
    isBase: false,
    rpcUrl: "https://op-pokt.nodies.app",
    wsUrl: "wss://optimism.drpc.org",
    explorerUrl: "https://optimistic.etherscan.io/",
    faucetUrl: "https://app.optimism.io/bridge/deposit",
    convert_id: "2781",
    id: "1027",
    symbol: "ETH",
    logo: "/tokens/op-logo.svg",
    addresses: {
      Fusion: "0xE876ccf876A21Dd429D7f368e5b6f8bdAE31Ff8f",
      FusionForwarder: "0x95A847284488C6E57001F1245813a0aCcC709f07",
      FactoryForwarder: "0x06A927Cf54B15d4178F0e3EC9ae85De5770B7CA7",
      FusionProxyFactory: "0x63949B7b906417c555136028391699E2B5adb381",
      FusionVault: "0x3705505C5690a836b33736CD13568Ee8700D35c4",
      PasswordVerifier: "0x4CBe3de5c80A83BBa51a80A9EECd29BeB0afC1a5",
      SignatureVerifier: "0xa4E6692C0AA19Fc75265267a771188eCA57C3C49",
      FusionGasTank: "0xA2d6267B5b167Ee27174BfDa808408F90391D949",
    },
    tokens: [
      {
        name: "ETH",
        symbol: "ETH",
        address: null,
        convert_id: "1027",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/eth-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
    ],
  },
  {
    chainId: 1284,
    chainName: "Moonbeam",
    isBase: false,
    rpcUrl: "https://moonbeam-rpc.publicnode.com",
    wsUrl: "wss://wss.api.moonbeam.network",
    explorerUrl: "https://moonbeam.moonscan.io/",
    faucetUrl: "https://app.optimism.io/bridge/deposit",
    convert_id: "2781",
    id: "6836",
    symbol: "GLMR",
    logo: "/tokens/glmr-logo.svg",
    addresses: {
      Fusion: "0xd17Dd62290EcdEa48e5029a4fBd519245C911c19",
      FusionForwarder: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
      FactoryForwarder: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
      FusionProxyFactory: "0x44950f083691828A07c17d2A927B435e8B272F6D",
      FusionVault: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
      FusionGasTank: "0xA2d6267B5b167Ee27174BfDa808408F90391D949",
      PasswordVerifier: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
      SignatureVerifier: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
    },
    tokens: [
      {
        name: "GLMR",
        symbol: "GLMR",
        address: null,
        convert_id: "6836",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/glmr-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
    ],
  },
  {
    chainId: 592,
    chainName: "Astar",
    isBase: false,
    rpcUrl: "https://astar-rpc.dwellir.com",
    wsUrl:
      "wss://astar.api.onfinality.io/ws?apikey=42eac632-f03e-4eb9-b588-1eeaf4b1034b",
    explorerUrl: "https://astar.blockscout.com/",
    faucetUrl: "https://app.optimism.io/bridge/deposit",
    convert_id: "2781",
    id: "12885",
    symbol: "ASTR",
    logo: "/tokens/astar-logo.svg",
    addresses: {
      Fusion: "0xd17Dd62290EcdEa48e5029a4fBd519245C911c19",
      FusionForwarder: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
      FactoryForwarder: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
      FusionProxyFactory: "0x44950f083691828A07c17d2A927B435e8B272F6D",
      FusionVault: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
      FusionGasTank: "0xA2d6267B5b167Ee27174BfDa808408F90391D949",
      PasswordVerifier: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
      SignatureVerifier: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
    },
    tokens: [
      {
        name: "ASTR",
        symbol: "ASTR",
        address: null,
        convert_id: "12885",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/astar-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
    ],
  },
  {
    chainId: 656476,
    chainName: "Edu Chain",
    isBase: false,
    rpcUrl: "https://rpc.open-campus-codex.gelato.digital",
    wsUrl: "wss://open-campus-codex-sepolia.drpc.org",
    explorerUrl: "https://astar.blockscout.com/",
    faucetUrl: "https://app.optimism.io/bridge/deposit",
    convert_id: "2781",
    id: "24613",
    symbol: "EDU",
    logo: "/tokens/edu-logo-main.svg",
    addresses: {
      Fusion: "0xd17Dd62290EcdEa48e5029a4fBd519245C911c19",
      FusionForwarder: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
      FactoryForwarder: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
      FusionProxyFactory: "0x21709908c8c8aA55F20Be21F58E79352A9b7D790",
      FusionVault: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
      FusionGasTank: "0xA2d6267B5b167Ee27174BfDa808408F90391D949",
      PasswordVerifier: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
      SignatureVerifier: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
    },
    tokens: [
      {
        name: "EDU",
        symbol: "EDU",
        address: null,
        convert_id: "24613",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/edu-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x77721D19BDfc67fe8cc46ddaa3cc4C94e6826E3C",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
    ],
  },
];

export default config;
