import { PublicKey } from "@solana/web3.js";

export const tokens = {
    btcToken : {
        tag: "BTC",
        name: "Bitcoin",
        mint: new PublicKey("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E"),
        scale: 6,
        cgId: 'bitcoin', // coingecko id for query price
    },

    copeToken : {
        tag: "COPE",
        name: "Cope",
        mint: new PublicKey("8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh"),
        scale: 6,
        cgId: 'cope', // coingecko id for query price
    },

    ethToken : {
        tag: "ETH",
        name: "Ethereum",
        mint: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
        scale: 6,
        cgId: 'ethereum', // coingecko id for query price
    },

    fidaToken : {
        tag: "FIDA",
        name: "Bonfida",
        mint: new PublicKey("EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp"),
        scale: 6,
        cgId: 'bonfida', // coingecko id for query price
    },

    fttToken : {
        tag: "FTT",
        name: "FTX Token",
        mint: new PublicKey("AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3"),
        scale: 6,
        cgId: 'ftx-token', // coingecko id for query price
    },

    liqToken : {
        tag: "LIQ",
        name: "LIQ Protocol",
        mint: new PublicKey("4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj"),
        scale: 6,
        cgId: 'liq-protocol', // coingecko id for query price
    },

    merToken : {
        tag: "MER",
        name: "Mercurial",
        mint: new PublicKey("MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K"),
        scale: 6,
        cgId: 'mercurial', // coingecko id for query price
    },

    orcaToken : {
        tag: "ORCA",
        name: "Orca",
        mint: new PublicKey("orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE"),
        scale: 6,
        cgId: 'orca', // coingecko id for query price
    },

    oxyToken : {
        tag: "OXY",
        name: "Oxygen",
        mint: new PublicKey("z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M"),
        scale: 6,
        cgId: 'oxygen', // coingecko id for query price
    },

    rayToken : {
        tag: "RAY",
        name: "Raydium",
        mint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        scale: 6,
        cgId: 'raydium', // coingecko id for query price
    },

    ropeToken : {
        tag: "ROPE",
        name: "Rope",
        mint: new PublicKey("8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo"),
        scale: 9,
        cgId: 'rope-token', // coingecko id for query price
    },

    samoToken : {
        tag: "SAMO",
        name: "Samoyedcoin",
        mint: new PublicKey("7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"),
        scale: 9,
        cgId: 'samoyedcoin',  // coingecko id for query price
    },

    solToken : {
        tag: "SOL",
        name: "Solana",
        mint: new PublicKey("So11111111111111111111111111111111111111112"),
        scale: 9,
        cgId: 'solana',  // coingecko id for query price
    },

    srmToken : {
        tag: "SRM",
        name: "Serum",
        mint: new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),
        scale: 6,
        cgId: 'serum',  // coingecko id for query price

    },

    stepToken : {
        tag: "STEP",
        name: "Step",
        mint: new PublicKey("StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT"),
        scale: 9,
        cgId: 'step-finance',  // coingecko id for query price
    },

    usdcToken : {
        tag: "USDC",
        name: "USD Coin",
        mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        scale: 6,
        cgId: 'usd-coin',  // coingecko id for query price
    },

    usdtToken : {
        tag: "USDT",
        name: "Tether USD",
        mint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
        scale: 6,
        cgId: 'tether',
    },

    atlasToken: {
        tag: "ATLAS",
        name: "ATLAS",
        mint: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
        scale: 8,
        cgId: 'star-atlas'
    },

    polisToken : {
        tag: "POLIS",
        name: "POLIS",
        mint: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),
        scale: 8,
        cgId: 'star-atlas-dao'
    },

    grapeToken : {
        tag: "GRAPE",
        name: "GRAPE",
        mint: new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"),
        scale: 8,
        cgId: 'grape-2'
    },

    slrsToken: {
        tag: "SLRS",
        name: "Solrise Finance",
        mint: new PublicKey("SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr"),
        scale: 6,
        cgId: 'solrise-finance'
    },

    portToken: {
        tag: "PORT",
        name: "Port Finance",
        mint: new PublicKey("PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y"),
        scale: 6,
        cgId: 'port-finance'
    },

    msolToken: {
        tag: "mSOL",
        name: "Marinade.finance",
        mint: new PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
        scale: 9,
        cgId: 'msol'
    },

    larixToken: {
        tag: "LARIX",
        name: "LARIX",
        mint: new PublicKey("Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC"),
        scale: 6,
        cgId: 'larix'
    },

    mariandeToken: {
        tag: "MNDE",
        name: "MNDE",
        mint: new PublicKey("MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey"),
        scale: 9,
        cgId: 'marinade'
    },

    mediaToken: {
        tag: "MEDIA",
        name: "MEDIA",
        mint: new PublicKey("ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs"),
        scale: 6,
        cgId: 'media-network'
    },

    ninjaToken: {
        tag: "NINJA",
        name: "NINJA",
        mint: new PublicKey("FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ"),
        scale: 6,
        cgId: 'ninja-protocol'
    },
    whethToken: {
        tag: "whETH",
        name: "whETH",
        mint: new PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),
        scale: 8,
        cgId: 'ethereum'
    },
    sbrToken: {
        tag: "SBR",
        name: "SBR",
        mint: new PublicKey("Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1"),
        scale: 6,
        cgId: 'saber'
    },
    alephToken: {
        tag: "ALEPH",
        name: "ALEPH",
        mint: new PublicKey("CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K"),
        scale: 6,
        cgId: 'aleph'
    },
    likeToken: {
        tag: "LIKE",
        name: "LIKE",
        mint: new PublicKey("3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR"),
        scale: 9,
        cgId: 'only1'
    },
    abrToken: {
        tag: "ABR",
        name: "ABR",
        mint: new PublicKey("a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp"),
        scale: 9,
        cgId: 'allbridge'
    },
    wesushiToken: {
        tag: "weSUSHI",
        name: "weSUSHI",
        mint: new PublicKey("ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj"),
        scale: 8,
        cgId: "sushi"
    },
    weuniToken: {
        tag: "weUNI",
        name: "weUNI",
        mint: new PublicKey("8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36"),
        scale: 8,
        cgId: "uniswap"
    },

    starsToken: {
        tag: "STARS",
        name: "STARS",
        mint: new PublicKey("HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW"),
        scale: 6,
        cgId: "starlaunch"
    },

    weDYDX: {
        tag: 'weDYDX',
        name: 'weDYDX',
        mint: new PublicKey('4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU'),
        scale: 8,
        cgId: "dydx"
    },
    weAXS: {
        tag: 'weAXS',
        name: 'weAXS',
        mint: new PublicKey('HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5'),
        scale: 8,
        cgId: "axie-infinity"
    },
    weSHIB: {
        tag: 'weSHIB',
        name: 'weSHIB',
        mint: new PublicKey('CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z'),
        scale: 8,
        cgId: "shiba-inu"
    },
    slndToken: {
        tag: 'SLND',
        name: 'SLND',
        mint: new PublicKey('SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp'),
        scale: 6,
        cgId: "solend"
    },

    weMANA: {
        tag: 'weMANA',
        name: 'weMANA',
        mint: new PublicKey('7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi'),
        scale: 8,
        cgId: "decentraland"
    },

    weSAND: {
        tag: 'weSAND',
        name: 'weSAND',
        mint: new PublicKey('49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt'),
        scale: 8,
        cgId: "the-sandbox"
    },

    CAVE: {
        tag: 'CAVE',
        name: 'CAVE',
        mint: new PublicKey('4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t'),
        scale: 6,
        cgId: "cave"
    },

    GENE: {
        tag: 'GENE',
        name: 'Genopets',
        mint: new PublicKey('GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz'),
        scale: 9,
        cgId: "genopets"
    },

    SONAR: {
        tag: 'SONAR',
        name: 'SONAR',
        mint: new PublicKey('sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE'),
        scale: 9,
        cgId: "sonarwatch"
    },

    DFL: {
        tag: 'DFL',
        name: 'DeFi Land',
        mint: new PublicKey('DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh'),
        scale: 9,
        cgId: "defi-land"
    },

    stSOL: {
        tag: 'stSOL',
        name: 'stSOL',
        mint: new PublicKey('7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj'),
        scale: 9,
        cgId: "lido-staked-sol"
    },

    wstETH: {
        tag: 'wstETH',
        name: 'wstETH',
        mint: new PublicKey('ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo'),
        scale: 8,
        cgId: "staked-ether"
    },
    wbWBNB: {
        tag: 'wbWBNB',
        name: 'wbWBNB',
        mint: new PublicKey('9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa'),
        scale: 8,
        cgId: "binancecoin"
    },
    REAL: {
        tag: 'REAL',
        name: 'REAL',
        mint: new PublicKey('AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb'),
        scale: 9,
        cgId: ""
    },
}

export function getTokenMint(tag) {
    for (const tkn in tokens) {
        if (tokens[tkn].tag == tag) {
            return tokens[tkn]
        }
    }
}

export function getTokenByAddress(pub: PublicKey) {
    for (const tkn in tokens) {
        if (tokens[tkn].mint.toBase58() == pub.toBase58()) {
            return tokens[tkn]
        }
    }
}

export function getTokenById(cgId:string) {
    for (const tkn in tokens) {
        if (tokens[tkn].cgId == cgId) {
            return tokens[tkn]
        }
    }
}

export function  getTokenList() {
    let list = []
    for (const tkn in tokens) {
        list.push(tokens[tkn])
    }

    return list
}
