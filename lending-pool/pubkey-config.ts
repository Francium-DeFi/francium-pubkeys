import { PublicKey } from "@solana/web3.js"
import {tokens} from "../tokens";

export const lendingPoolProgramId: PublicKey = new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj")

export const interestModelOld ={
    threshold_1: 60,
    threshold_2: 90,
    base_1: 0,
    factor_1: 25,
    base_2: 15,
    factor_2:25,
    base_3:23,
    factor_3: 1300,
}

// case1 for normal assets
export const interestModelCase1 = {
    threshold_1: 80,
    threshold_2: 90,
    base_1: 0,
    factor_1: 25,
    base_2: 20,
    factor_2: 300,
    base_3: 50,
    factor_3: 1025,
}

// case2 for big value assets (usdc, usdt, eth, btc ...)
export const interestModelCase2 = {
    threshold_1: 60,
    threshold_2: 90,
    base_1: 0,
    factor_1: 25,
    base_2: 15,
    factor_2: 30,
    base_3: 24,
    factor_3: 760,
}

// case3 for high yield assets
export const interestModelCase3 = {
    threshold_1: 60,
    threshold_2: 90,
    base_1: 0,
    factor_1: 25,
    base_2: 15,
    factor_2: 70,
    base_3: 36,
    factor_3: 1140,
}

export const LendingPoolConfig = {
    "USDC": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
        lookupTableAddress:  new PublicKey("8zkUc4NeXDoFp8UBDQ3sPVKbBAHNHdvNbeRm1tupEHS9"),

        lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
        lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
        lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
        lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
        lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
        lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
        lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('8Eq2XZRQe2EjYiNmu7Lhgb2xVHqJ5wFvcVU6yH3CUn34'),
            farmingPoolAuthority: new PublicKey('4NWwKzVvEfKCsMeauE4cZHRR9K91FsFauxnrW6pK8H2E'),
            farmingPoolStakeTknMint: new PublicKey('62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu'),
            farmingPoolStakeTknAccount: new PublicKey('3yNu5pg2DhtaxZbAwgUSsVnemqMn1WqxnBn6tgKGj7R2'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('34R2ZVwg6uvJWFYjQ2LrrKFFaZ7CgsyZbMKwvfjxkvip'),
            farmingPoolRewardsTknMintB: new PublicKey('EgiD69Uhf8t13CRPKz1btmtHj7SogeEjyPHfnT4d13XN'),
            farmingPoolRewardsTknAccountB: new PublicKey('FGAh5YjdcyzQ841skvGQGWyejK3uPiwpEdtMncJqe7f9'),
        },
    },
    "PAI": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: new PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),
        lookupTableAddress:  new PublicKey("2E8tZ5SLctXECt74ooLxDf4Wz5dwngpoKwc6z7Mn987S"),

        lendingPoolInfoAccount: new PublicKey("EzofB5BK23PHDfEAThk5oJANb9FWTXzezrafiTDzcBBA"),
        lendingPoolTknAccount: new PublicKey("4Kvd1ULAy45k2EQt1pdePa82UBz9tW6N1rLJWb3EAJgQ"),
        lendingPoolFeeAccount: new PublicKey("sKmPL3zkAf7777bhXnMaSfTU1jg1keNHNPz38wBTNd5"),
        lendingPoolShareMint: new PublicKey("HDvD8a4VWbkHNG7hb4CBumNhn41DyKL51qVYBNH73o23"),
        lendingPoolShareAccount: new PublicKey("9tk9XwzJt1J2DoNcBtBmGMsnbnwvMUAoJF1pjdcfJe2E"),
        lendingPoolCreditMint: new PublicKey("HkMze549cFMdLMRDsJyfH8n6EE5jjTuVZr9re4WRYuk9"),
        lendingPoolCreditAccount: new PublicKey("7h8YziEXSZgyzqDb5c6PP3uUztQR7hQHwqyWWe9BTqY3"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('2Dp5WMATsyfHtMEkU2JTrffc5onPCLqZFybcYvPAPxNP'),
            farmingPoolAuthority: new PublicKey('7A88TMr5kQpHWidb5w9zeZr4dXMse6DsWTELbLe1WEyV'),
            farmingPoolStakeTknMint: new PublicKey('HDvD8a4VWbkHNG7hb4CBumNhn41DyKL51qVYBNH73o23'),
            farmingPoolStakeTknAccount: new PublicKey('8QaCpnJP61u8qm9ZJYdXgQWGNacoefmU2bDKfmLPHSmE'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('7B2BnzmT779H3KzAn8raQQEcRKSw4GhPPDS657X7NRDs'),
            farmingPoolRewardsTknMintB: new PublicKey('Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS'),
            farmingPoolRewardsTknAccountB: new PublicKey('GGwsqBzz6L7Wvq7ZKdn7yQBCU5qLdqwMfVZZQWp8uYZn'),
        }
    },
    "RAY": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.rayToken.mint,
        lookupTableAddress:  new PublicKey("Fe8sni23YSFGqZTLpTia6y6fUmbyzao22wJy1hBqGSx"),

        lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
        lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
        lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
        lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
        lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
        lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
        lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('9G2EXWwSaqJNgk9AWkx5u6JsUpdCaeh7ZUzsjJsSJkYz'),
            farmingPoolAuthority: new PublicKey('gbPTC9F2tnP9z9xzjeQWjNXBsuHw9ZjkG9NahZ7wDPa'),
            farmingPoolStakeTknMint: new PublicKey('5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc'),
            farmingPoolStakeTknAccount: new PublicKey('GKV52HXiEDR8Qqazdp9LA5Aiwjny94v9CavCVAt7TvxS'),
            farmingPoolRewardsTknMint: new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
            farmingPoolRewardsTknAccount: new PublicKey('9dvYPm8LjhTrKF3bJ4Lt8YwQqxhxzWWXWGnbqfamNVQK'),
            farmingPoolRewardsTknMintB: new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
            farmingPoolRewardsTknAccountB: new PublicKey('9dvYPm8LjhTrKF3bJ4Lt8YwQqxhxzWWXWGnbqfamNVQK'),
        },
    },
    "USDT": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.usdtToken.mint,
        lookupTableAddress:  new PublicKey("8T9RNbWAWuPgKXgV5EaQV8kvo9fbGjmLmt4XzwFimn1c"),

        lendingPoolInfoAccount: new PublicKey("EyqWUeme2B1dhuwJvJVi2coYPcGWmWrakcpsSFeikrhb"),
        lendingPoolTknAccount: new PublicKey("Acx3Ky9pk8CyYftA9HYF31EbVhBDi21EqJsFtMW2XxXW"),
        lendingPoolFeeAccount: new PublicKey("7gAN5Y4hGAG2A9vyr9dURGosjmo4Rwiaqz4iKZGNenE1"),
        lendingPoolShareMint: new PublicKey("8TtsTZQ6mU4YSW5jw4sDjSDEG1CW8QLpK7C9g5TVgBvn"),
        lendingPoolShareAccount: new PublicKey("EfLgyXRGFi9MUCMgrsFBuAJ7pMPXBceKhD6x4PgdvLLc"),
        lendingPoolCreditMint: new PublicKey("CoheXVD8cAdVaKznfay22dBpfML5Fbz5g4j67syKgRg4"),
        lendingPoolCreditAccount: new PublicKey("EAQxDXsA6RXxWtA1PwZNnTnj2MapHBtMzvUmfuGPJCPX"),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('AKi1GE5Xa5boTwNEy4u2PaHqtQBVFcKXVU5oqXFFYST8'),
            farmingPoolAuthority: new PublicKey('CQ83mRhE3AhM1yLiGkgKut1Fsy9dZPmzCjNhLu1vKE8Y'),
            farmingPoolStakeTknMint: new PublicKey('8TtsTZQ6mU4YSW5jw4sDjSDEG1CW8QLpK7C9g5TVgBvn'),
            farmingPoolStakeTknAccount: new PublicKey('CiwYeQcjMyvt7gvkwNAQRq8DEbtAh7J3K3Zrfsb54got'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('9QsFN5L8Ld9aR8FFZ8gTM5euG6us7Rw7QWZUUthptoib'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('BC3GujgFNpbo2rYRfit7Rr3Af769Jo6ApN3vr58BQazw'),
        }
    },
    "SRM": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.srmToken.mint,
        lookupTableAddress:  new PublicKey("E7Rf4v3DroXQ4Q2Aon5FsqtDvduNuXEXqCcoKoD8UYoj"),

        lendingPoolInfoAccount: new PublicKey("B1zB1EuTjnFPLdwySeBYhzeAf3h9buWLbDoG7AHcUTMF"),
        lendingPoolTknAccount: new PublicKey("FLQtBThLEVvhXdKqq2CREL8sFt8jAFS8szm4HaMYqmJk"),
        lendingPoolFeeAccount: new PublicKey("FdSBYwMEfy21H3k64cvYdir3mxzmnZotiYUsC5iPPoxM"),
        lendingPoolShareMint: new PublicKey("6CZhCFwA7hbqDEoVUQdFpHaCGQU7fSSwhaJWdG4DmsQ6"),
        lendingPoolShareAccount: new PublicKey("C3EjtH3hVuLrU3j1y5ArMFRbAhxFf5hXNfk3b9SU91qN"),
        lendingPoolCreditMint: new PublicKey("DqKuxgMxLPDCXtoQzLG1p85S2i3tP3EaeUVDAw7P8Nt4"),
        lendingPoolCreditAccount: new PublicKey("Ednqn9Zo5HpDX2DRmCWu6x46ZXnHNmTmrq9G8hrTuBnz"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('63Xrt9Z5jC3D9pR2RVL2D57z5bspaX6pqdDVW9XnAMU8'),
            farmingPoolAuthority: new PublicKey('D1QkTSH7UaNeCsiTsB5PGF27BAeAwu9TBNiCX4upARzg'),
            farmingPoolStakeTknMint: new PublicKey('6CZhCFwA7hbqDEoVUQdFpHaCGQU7fSSwhaJWdG4DmsQ6'),
            farmingPoolStakeTknAccount: new PublicKey('6E7dXsDkdErDuG4z7ED8knoAR9EFtnKApVvYQyytm1kU'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('gw2RdaKNv8TW7Epvz41vCZZn2AppMRoc9cZXsVtKZ1k'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('gw2RdaKNv8TW7Epvz41vCZZn2AppMRoc9cZXsVtKZ1k'),
        },
    },
    "ETH": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.ethToken.mint,
        lookupTableAddress:  new PublicKey("5M7vfgfzqT4F5QJyb7w9YqGPrVXBLhQa7sqVRfmd5NE7"),

        lendingPoolInfoAccount: new PublicKey("CKMQxUz1nkn3NS5B9AUD1uyWNL8iN2piG9LVt1RvWXzj"),
        lendingPoolTknAccount: new PublicKey("9MH38iiDX4Pk37U6TXLqz2783RspNhwBTYwBNHp8WUzP"),
        lendingPoolFeeAccount: new PublicKey("8UPe7Fcm2f1QEFQh2YNr1jg2vgQmj4CXhLYEWgStHd8B"),
        lendingPoolShareMint: new PublicKey("B8QXcUv5FFwyHH5V88g6PhYBc8fQvwSpza4C9PsiRpQD"),
        lendingPoolShareAccount: new PublicKey("C5X2Q2K2jQtwpuqHKnLVJ1ZsvL9BMRwddMgqaQ5UGNkC"),
        lendingPoolCreditMint: new PublicKey("BKKbCDggM83SPLFd1jRPu1ZsCv9nXkwZVne11N9FEs9w"),
        lendingPoolCreditAccount: new PublicKey("9A3KAmmv1VyqNqVGBM6T9b1dp9Ax9xxdeXEgedo8U7Gh"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('7rKAmXDUhqZrzM2nZbM2PxbxsErAjGPxbRgr2fFxQ9Y'),
            farmingPoolAuthority: new PublicKey('FzoCLipUnS18zMvag9ffr3ATPJicrphYZyEZeB9Acp4G'),
            farmingPoolStakeTknMint: new PublicKey('B8QXcUv5FFwyHH5V88g6PhYBc8fQvwSpza4C9PsiRpQD'),
            farmingPoolStakeTknAccount: new PublicKey('BR1gbF7jjcTaXTJfASSm1hz1h7A8My7F4meCgB9dKXwq'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('H1aJwXV3LwEghvPKJpNkjdedH7dmDyDLjrTChtomhJKQ'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('H1aJwXV3LwEghvPKJpNkjdedH7dmDyDLjrTChtomhJKQ'),
        },
    },
    "WSOL": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.solToken.mint,
        lookupTableAddress:  new PublicKey("4DoNrJQqMB2kG31bzKxVdgKWqB4rrCNt3bVbAzUd4Tmg"),

        lendingPoolInfoAccount: new PublicKey("EnZC8MB6QLTxwN1LNqCXYC7XMpvXqitnYQPf5y5AcQRn"),
        lendingPoolTknAccount: new PublicKey("GiJwrxQW5NQWWAva4rnDMXwHxfrhyUzwMX5to1pmCCgF"),
        lendingPoolFeeAccount: new PublicKey("2BDZqoVKAX3PJKeZJytjk7oEpbUu3jvdgdi6tA8VusnY"),
        lendingPoolShareMint: new PublicKey("92Zst3rEoJsyZUW2yNc2811GtkBwFrm3tqgxMTtFWuSB"),
        lendingPoolShareAccount: new PublicKey("Hyi1jMgc9MMEZyaG9ziL2PvT7zbeRNKhb5K1kj9bxz4x"),
        lendingPoolCreditMint: new PublicKey("7x61NrCzeekHwgW5Nk4afMg2sxjMK6RyMkx8tCzzX4qG"),
        lendingPoolCreditAccount: new PublicKey("WuPCgCuyLSXatdjyWqkGjCPSQFgKLwcfsNR9fDq3hVL"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('G8MpQfTa18RcGK6xdKxKqG3u9NXWwqEMN3YM4MAFSukS'),
            farmingPoolAuthority: new PublicKey('9EkVgtRxTWJWtksC2maF7YJqKyDR45z3PrxmzUMZwGpm'),
            farmingPoolStakeTknMint: new PublicKey('92Zst3rEoJsyZUW2yNc2811GtkBwFrm3tqgxMTtFWuSB'),
            farmingPoolStakeTknAccount: new PublicKey('5Dwb6bW6nJ7tawnXXuJLRRsHnpDWrsQGMBNePsi2HHNc'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('CRmaS1yBemFcHAooAfRUM41ZCBpnM7FCRKi7x71YXnTj'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('CRmaS1yBemFcHAooAfRUM41ZCBpnM7FCRKi7x71YXnTj'),
        },

    },
    "ORCA": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.orcaToken.mint,
        lookupTableAddress:  new PublicKey("2iiSgXsQv5Ej6m68KkP7uU1jCZwy2Py1RhwLkG91PBt4"),

        lendingPoolInfoAccount: new PublicKey("9bo5JunUhp4XD7TDeeS9ARvWTYGBYtuQKUHGUb7RRvkf"),
        lendingPoolTknAccount: new PublicKey("F3EhkuRuZaYNY2bLTosjv6V7QXiZ8db9nXTZeLnmHC7V"),
        lendingPoolFeeAccount: new PublicKey("F3EhkuRuZaYNY2bLTosjv6V7QXiZ8db9nXTZeLnmHC7V"),
        lendingPoolShareMint: new PublicKey("DKoKBD7YheCGZjWp5CaHDPtheAcUveRSMvWkaivbNzWh"),
        lendingPoolShareAccount: new PublicKey("AMUE9EgiEiTP1YVBicwTVGtumBypR5thjTgbsXZM2PPG"),
        lendingPoolCreditMint: new PublicKey("CJNd1LZZxZr243dpNN9DtEavXn65kstrg251MPb8vmwW"),
        lendingPoolCreditAccount: new PublicKey("74m1zyzV8x9d8kZLEaVaNWRsnx8pH47tfX8cquot11ef"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('CXjjqMXTyeoQHTUsNfXApsxGMgvWyivG4UdyY2BD2xEw'),
            farmingPoolAuthority: new PublicKey('DMR6KeGhSWtc3wA1si6fTF75ARmqVL39dRWK5ayJkAh6'),
            farmingPoolStakeTknMint: new PublicKey('DKoKBD7YheCGZjWp5CaHDPtheAcUveRSMvWkaivbNzWh'),
            farmingPoolStakeTknAccount: new PublicKey('AmWdUzgQrLmDP4j83Gn9jo3n2nNVBMpnmmykF2MDp5T2'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('2vZu2avhJoQnTu4uRFdyj9W3HH4eWgiANQcS1uVFDSC9'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('9dJZ3YKYLUCgFhxsXSDpP5T6ahFWRufW8Fn6URxP26ZB'),
        },

    },

    "ATLAS": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.atlasToken.mint,
        lookupTableAddress:  new PublicKey("7jmphqSz19pSyYDAoNbBnAdpSPjCDMhuGowvZL4MVPya"),

        lendingPoolInfoAccount: new PublicKey("FnkmnUqazYmSm791rSTSXYbAzDzsuHJBgySgNZeCHGDJ"),
        lendingPoolTknAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
        lendingPoolFeeAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
        lendingPoolShareMint: new PublicKey("4mygt5bFQrbXH9gNg75j1KVTrKGhvcYiQjir6FJ8afYH"),
        lendingPoolShareAccount: new PublicKey("Eb4Ai2PXmRX3V9TX6awjNdBXZKGRyCgTmQu6Pni9NnTb"),
        lendingPoolCreditMint: new PublicKey("3nAgm2XrSi3RNDWz4wCvUWwQW3QQE7s5i7MxNz8r8mGZ"),
        lendingPoolCreditAccount: new PublicKey("3PwecBTLVt8zqKadSFDjeKH7Swzt1GxvU27urj66L89P"),

        rewardsPool:{
            farmingPoolAccount: new PublicKey('DWSsuov4Jgp8d2h5f9vx142tmJMeKBqCwyzgp8YNpXUw'),
            farmingPoolAuthority: new PublicKey('D6VwvNE8Nt4QcotuUVW1as51spadXNVBD9PXidZkvDWq'),
            farmingPoolStakeTknMint: new PublicKey('4mygt5bFQrbXH9gNg75j1KVTrKGhvcYiQjir6FJ8afYH'),
            farmingPoolStakeTknAccount: new PublicKey('2EFNPCYTTy6AoAgUmeQiNNgHRnmP2zQE7pWhH8vvnPCJ'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('DWsBfN9jYzXaJ7CiprCXMbzvSWrmRvWYWSBYU2b84oGe'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('4EGXGVXAwzw4dhQPdTb5qdg9Bas99fNVgt1ZC4nDTJvZ'),
        }
    },

    "POLIS": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.polisToken.mint,
        lookupTableAddress:  new PublicKey("8GNhPXDU4UGascdfKGmu3ZBJsEbYoxe4w2BRixXH8ZNK"),

        lendingPoolInfoAccount: new PublicKey("BWJkfNQnYt817V6sKxEJ3sFcivcXZgfKGCe8Z9f4LcVj"),
        lendingPoolTknAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
        lendingPoolFeeAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
        lendingPoolShareMint: new PublicKey("FenVvq6s6S3McD1BCm76Ktz1EvRNCB4qYKGFU76fB7Fj"),
        lendingPoolShareAccount: new PublicKey("GKTqMGVCgXJaDzjYfPdgMbVfnzCKDj6KqRpykauw19do"),
        lendingPoolCreditMint: new PublicKey("EkKFNt7PBRdWy8EpmZAbAZdvXZpSKvdwMfo8eotN1PEr"),
        lendingPoolCreditAccount: new PublicKey("FGKikDsnBPQ5m7jgbNNbHaR1gh1T8GYJ5sPYWoYdoE4p"),
        rewardsPool: {
            farmingPoolAccount: new PublicKey('9fdYMtX2xuqUTUVFrPR2fegRHh7qakLkXwX1RVw9aTHH'),
            farmingPoolAuthority: new PublicKey('G5BxwBHd1j7KdWbHo2HwZCmEWtXjvQ8uHRVLo2g1cikM'),
            farmingPoolStakeTknMint: new PublicKey('FenVvq6s6S3McD1BCm76Ktz1EvRNCB4qYKGFU76fB7Fj'),
            farmingPoolStakeTknAccount: new PublicKey('GhbQAXhtKt31BTCLdkP92CJJRJ1wDoRnjuSBbVoz4AV2'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('FjFMXsVPA4KJxCx3ARjuTLJH1c6UwMvSHXLVZD5UcnR3'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('AG3sYd5HhxeWQ2CSzZsrK6XF6Zg9UXZh4uGUMgDW8VZp'),
        }
    },
    "GRAPE" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.grapeToken.mint,
        lookupTableAddress:  new PublicKey("59xHfAoWhqJya4x7cgvWiogKQoFcQyBVSNHXzX6SrfCi"),

        lendingPoolInfoAccount: new PublicKey("G8MGSKf12Kuf1S2w35XwQs7vjiGtxRcgNsLAhBiLeKGb"),
        lendingPoolTknAccount: new PublicKey("HNwBYkGp32m7ptkgvzAj9GEWDpdZoPWiJ66nuonEMsSN"),
        lendingPoolFeeAccount: new PublicKey("HNwBYkGp32m7ptkgvzAj9GEWDpdZoPWiJ66nuonEMsSN"),
        lendingPoolShareMint: new PublicKey("GdphBDVjiUx7MFYsHRd1WL1nu4mmyohZHg9vi5hscJJj"),
        lendingPoolShareAccount: new PublicKey("BLcWDikfY1UffEdm14jmsZ2jiV7wTJNNPxoa4Ci8C3mg"),
        lendingPoolCreditMint: new PublicKey("39AmuFZrF46JxZuuzwWAGhe677d23tCmTt3gCBY4tsjb"),
        lendingPoolCreditAccount: new PublicKey("4MVCD592juy3jw3GAHPSWPCk1zP17izXAsTCGsttz92t"),
        rewardsPool:undefined
    },

    "LIQ" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.liqToken.mint,
        lookupTableAddress:  new PublicKey("ySebSZ5y6JEwYBQDbkE2ombdSLw4Y5Y9KtUEoq3nRk8"),

        lendingPoolInfoAccount: new PublicKey("24dy3YvNeRThzCCiAm7k4S8ZZXnpsC8sqQLzfYmfTuue"),
        lendingPoolTknAccount: new PublicKey("5UKqFFd9GrYnCT3dqZFq9qJjaroQpqtbAFGpu1ZyAkNa"),
        lendingPoolFeeAccount: new PublicKey("5UKqFFd9GrYnCT3dqZFq9qJjaroQpqtbAFGpu1ZyAkNa"),
        lendingPoolShareMint: new PublicKey("5CCvvqeoWnRtxTgEbhRckKrGMc4rmiiD9VL9BpHVo3pq"),
        lendingPoolShareAccount: new PublicKey("AsczgPTpW8A6wQZTtu6Z5pVi4uvJsQf9d1MRXE7c7YrS"),
        lendingPoolCreditMint: new PublicKey("3sd5YPZUVkAYGdsDRgHZF4F6GN6kPDr63gY2FwZvgjMx"),
        lendingPoolCreditAccount: new PublicKey("7iNXmECbQYq2cCrwbyZ9aJbVJ8uCRzPjjj1KeYktu6ut"),
        rewardsPool:{
            farmingPoolAccount: new PublicKey('5vpydpXG36A9nR1Nxq2wVAALovbyUzGRnuqX15gSBBF2'),
            farmingPoolAuthority: new PublicKey('97x78mLeiRbXtuS9nbASXLM2yvohq1VzGPCC58YdYycw'),
            farmingPoolStakeTknMint: new PublicKey('5CCvvqeoWnRtxTgEbhRckKrGMc4rmiiD9VL9BpHVo3pq'),
            farmingPoolStakeTknAccount: new PublicKey('9sPcu5Nmqo1GamkzgY9A4dfQgwVFjrFwvu7jResWCX8B'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('5RGAkNcXqcEgmXuzGCbKBnNXpKuWeFVAgC76P2y4sXiK'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('B4b6E4mDMPYGq75gXkBJqyD7Dp36uP7Ks6fXVfY4bTxk'),
        }
    },

    "COPE" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.copeToken.mint,
        lookupTableAddress:  new PublicKey("8A59L1VxS9fVyJ6GQ9xeZLJmrPyuPpangMuk4HLFZhqg"),

        lendingPoolInfoAccount: new PublicKey('Hmde6PfS3wv2wi1rePBTFSjMqpugPpBFc8HLiYfHwsTB'),
        lendingPoolTknAccount: new PublicKey('BZwinxfYXhHgDc61AU9YFv7VkcuffVcQqBXXms8JAovX'),
        lendingPoolFeeAccount: new PublicKey('BZwinxfYXhHgDc61AU9YFv7VkcuffVcQqBXXms8JAovX'),
        lendingPoolShareMint: new PublicKey('GLvCYLcwQPr6CcJQKZSe2QoXj6tUiD2PxMPt9FJKSx7K'),
        lendingPoolShareAccount: new PublicKey('59RQbAq1QVSeLKvjDrokxrH86oq7tVF2rTW4ydBU3KB4'),
        lendingPoolCreditMint: new PublicKey('4HrgJueR9RHvmsyFfZcjtjg9Q7Q6ncrU1CGQqmeb9Y3a'),
        lendingPoolCreditAccount: new PublicKey('DtgHkAtvqx7uzvba1518c2CCpaU5jcsaZtiAydHvnFN8'),
        rewardsPool:undefined
    },

    "SLRS" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.slrsToken.mint,
        lookupTableAddress:  new PublicKey("73WSoHB9xCzc4WL9ZMQfXQFQSB9BkUThj489M3faYSMg"),

        lendingPoolInfoAccount: new PublicKey('BZ4tTB8wfU8oYryLcJQGEhNdfrCaDbJNqnppVPN9xQbJ'),
        lendingPoolTknAccount: new PublicKey('5ymJNV438qTDJFZqNPMjUefvLBfpvQooPus9vPBVGdv7'),
        lendingPoolFeeAccount: new PublicKey('5ymJNV438qTDJFZqNPMjUefvLBfpvQooPus9vPBVGdv7'),
        lendingPoolShareMint: new PublicKey('GqA6BUoT4XvAmxFZ7yRi5YRNuhLQrqhxApmTtbwhEAgV'),
        lendingPoolShareAccount: new PublicKey('9sVkamW2WH3uWuC68SUJPGGkk9zTMXHd3vzf73KBhT2x'),
        lendingPoolCreditMint: new PublicKey('4JoBxKGeXFUSrrKYkeESXFFkPewjQ3e1QYKfC5VwFKWP'),
        lendingPoolCreditAccount: new PublicKey('7zz6qratbjNpK9U8Ea4eibfweBWeRgq7WdmJ72Lauvnt'),

        rewardsPool:undefined
    },

    "PORT" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.portToken.mint,
        lookupTableAddress:  new PublicKey("45V4xnfZHTFjy7aHJMvhCUX8MfHiXuhvGk3CaQ7enJ61"),

        lendingPoolInfoAccount: new PublicKey('7cTGVuwrxC1vv9uyug9cVu7Vp5AbqV6GvKedrxSQ4JNu'),
        lendingPoolTknAccount: new PublicKey('6BfUm64VY4SqxkFtesCgA43VuosanEPgPD7uDEJoAZY4'),
        lendingPoolFeeAccount: new PublicKey('6BfUm64VY4SqxkFtesCgA43VuosanEPgPD7uDEJoAZY4'),
        lendingPoolShareMint: new PublicKey('G8fYY6kJeHaGqdS9BZvveXjiwewGmqX91xjqG4wdbArv'),
        lendingPoolShareAccount: new PublicKey('H2QJ9eCTaX9f9SCJEpMG5dwENHY3zmb8Adneko9otaTq'),
        lendingPoolCreditMint: new PublicKey('HdBfZDA7MfnUNy8cpU5xav9Ci6nWfDzrNzkC2h7hrhhv'),
        lendingPoolCreditAccount: new PublicKey('4pYumgk2u8qDCvWFrvfxaepp9YFo4ZaqEw7okHCangep'),
        rewardsPool:undefined
    },
    "mSOL": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.msolToken.mint,
        lookupTableAddress:  new PublicKey("A9L7C5QMNG5yBjntCxjo4tkxmu2AHiNP5ev9uBtLUMfE"),

        lendingPoolInfoAccount: new PublicKey('492Hr5QDQyrsLcyXqMZ7A5osjmqwtn4cdKNQLDBYBzvy'),
        lendingPoolTknAccount: new PublicKey('ADW9ZJuRQ9xbzTtWCwX1Th24Vxq7GWHWwYtctrbyjSr1'),
        lendingPoolFeeAccount: new PublicKey('ADW9ZJuRQ9xbzTtWCwX1Th24Vxq7GWHWwYtctrbyjSr1'),
        lendingPoolShareMint: new PublicKey('4mntRxKJWib1YTWNV4aLfszF6FeziBHdwnNAwGSfKKMX'),
        lendingPoolShareAccount: new PublicKey('EbWWhmDLKXDdq2guubVJCdSztuUaN6XhtwVMy9TMMwtV'),
        lendingPoolCreditMint: new PublicKey('Fdu3QfaQ9VL4GF85NrkpzhKRAJECv9cx7gchHca5MsRt'),
        lendingPoolCreditAccount: new PublicKey('HdTwUP1U3WQ1EnYPP8c8mx8sqHhXYQ9zwKVsLGxWi7W1'),

        rewardsPool:  {
            farmingPoolAccount: new PublicKey('Hu2QsZ57NHmgKEReXYPfS79amdqyyuxzbwSdxvd1UTwv'),
            farmingPoolAuthority: new PublicKey('7af5t7Ms526TYXEh5Y4nvot6xbWyGaiQnNJf3D9dygsb'),
            farmingPoolStakeTknMint: new PublicKey('4mntRxKJWib1YTWNV4aLfszF6FeziBHdwnNAwGSfKKMX'),
            farmingPoolStakeTknAccount: new PublicKey('39bnyhokuj3RCsLZnZsjbctRtx7rsYV4hQNoxQEKx9xy'),
            farmingPoolRewardsTknMint: new PublicKey('MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey'),
            farmingPoolRewardsTknAccount: new PublicKey('2JEph4UfH6H49fmsYBZg7zSXKTUENszypmPC5qMmefkc'),
            farmingPoolRewardsTknMintB: new PublicKey('MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey'),
            farmingPoolRewardsTknAccountB: new PublicKey('BFBh633oDNn7hV89mA6TSUPGU6JeMdKzXVBHUi3Ab6Yd'),
        },
    },

    "LARIX": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.larixToken.mint,
        lookupTableAddress:  new PublicKey("BJjufpt3aM37HbZo3D7JLkDcxeHPJt8peNXXNAZTDXhP"),

        lendingPoolInfoAccount: new PublicKey('BGYGxpa2LYJ3ZgpA9tWpKjD2wbuM7c2zwFV9ZMCKRPp6'),
        lendingPoolTknAccount: new PublicKey('GTKq5mzS3zutHQmHXs5jkj4oqcFQoav7faSCNYaCymMq'),
        lendingPoolFeeAccount: new PublicKey('GTKq5mzS3zutHQmHXs5jkj4oqcFQoav7faSCNYaCymMq'),
        lendingPoolShareMint: new PublicKey('Bqwpx4yG8SpeiwTueqK47iF7vpYN1TH8tmajnZH25yb3'),
        lendingPoolShareAccount: new PublicKey('GjnUVSbRiewuiMSrp2yNwXfTFNZC8rR9jBXwv62L1bAk'),
        lendingPoolCreditMint: new PublicKey('3XVHbuVqySvGyNY8qs9DTCSddCjqqz5XASGcNKM6JCLZ'),
        lendingPoolCreditAccount: new PublicKey('EMpchWJSbx5LLXgc9JdpRzpFmyfwhvUQXeJ8NBGR4Z8G'),
        rewardsPool: undefined
    },

    "MEDIA": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.mediaToken.mint,
        lookupTableAddress:  new PublicKey("CMuDXGgN8tFTdpEQ7v3XWbQegmdFm8waMV8Cdgvw2jXy"),

        lendingPoolInfoAccount: new PublicKey('9zraX81waus632HnvJJci2JvaM1GJSEETJNteqCn1D7r'),
        lendingPoolTknAccount: new PublicKey('5548dt2zeaXYu3nHPFNSgTn5Ds7s7mBQehjDKBdnCuUJ'),
        lendingPoolFeeAccount: new PublicKey('5548dt2zeaXYu3nHPFNSgTn5Ds7s7mBQehjDKBdnCuUJ'),
        lendingPoolShareMint: new PublicKey('2uz38uprUXQaT1sTudPRpsXwbsWYQmEr74FQumevCgtu'),
        lendingPoolShareAccount: new PublicKey('5vu2oNd1dnW2y7rP6a6zNaG5WBem4B2w4MABVgKPZtxY'),
        lendingPoolCreditMint: new PublicKey('5ExTDsLvuEvss41EXV8wNwA7usfGAYrHmjCPFzu5z6PR'),
        lendingPoolCreditAccount: new PublicKey('hGpWYt82QCXAZeyYvo6iyZXfDWXRF1rf2CAYDx7zJRT'),
        rewardsPool: undefined
    },

    "BTC": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.btcToken.mint,
        lookupTableAddress:  new PublicKey("HUT8P5M4buU38F361SC8Zzp5VPAHfMbmL4aAzoyLdVp6"),

        lendingPoolInfoAccount: new PublicKey('DxAuEAxKYXsKMYG5Ma4TM8AsrAo7LQBSnbEGicU7i1ek'),
        lendingPoolTknAccount: new PublicKey('2MN34BxuLVrjZpKYKHmW1c6ZGeQs4aWQRrEvmrYfZdtG'),
        lendingPoolFeeAccount: new PublicKey('2MN34BxuLVrjZpKYKHmW1c6ZGeQs4aWQRrEvmrYfZdtG'),
        lendingPoolShareMint: new PublicKey('2G9iwy9zfLaXB2bFiqSA7YbKEvtAEXVmdvGTF28jQVgg'),
        lendingPoolShareAccount: new PublicKey('HGejymLhai1TDvRA4vBEbS5VRbKP1u74ZdzZcv8Y2o1M'),
        lendingPoolCreditMint: new PublicKey('6WzqPd81AqsCwbXp33A6ro87axfD9je32hn3JE4KsnGi'),
        lendingPoolCreditAccount: new PublicKey('E7HkZYeY8mqrtC45kusWiArqLNpGnV5Foioj6yEPHB1y'),
        rewardsPool: {
            farmingPoolAccount: new PublicKey('9LPNrtfkDgNTf7hex7PvufE1KypP54eU6AmStgn5Bo8g'),
            farmingPoolAuthority: new PublicKey('DaB9HtEeWGfH25dFXMbYpxsUkZtqvbxQPjdsoxmpNCHK'),
            farmingPoolStakeTknMint: new PublicKey('2G9iwy9zfLaXB2bFiqSA7YbKEvtAEXVmdvGTF28jQVgg'),
            farmingPoolStakeTknAccount: new PublicKey('DNuEdaUXrYCRpELZssM9t2ZUQ6V4GJiijCEaXRr54Gpp'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('GAeyyaFDBwX7LPSp5oQBRdZDCVUePeaJFDujCVkj5NDV'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('4uL23rEj7fzNCFZ8Bv3SunLhtMamX3nAciYCSdSmAP1R'),
        },
    },

    'NINJA': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.ninjaToken.mint,
        lookupTableAddress:  new PublicKey("DijvccMoRfYmGPSUUzsXURoHteBtheNVRbnqiWqY7kL7"),

        lendingPoolInfoAccount: new PublicKey('2U3t27cfbUg9nkqPiLyijAFZs99NLvKGt3rjBdbueoKh'),
        lendingPoolTknAccount: new PublicKey('Ai5ZtdQtgTpEhbz1ZGriBf5X3ag8R83tfeWK6k6ropdx'),
        lendingPoolFeeAccount: new PublicKey('Ai5ZtdQtgTpEhbz1ZGriBf5X3ag8R83tfeWK6k6ropdx'),
        lendingPoolShareMint: new PublicKey('CHphcXpuc541joUE56Sgcvgx5kLqgGVAJmo6NJkGVbPp'),
        lendingPoolShareAccount: new PublicKey('2QnFwdQcqwsxCVeUbLLXz3CY76P9BxFZSANnMtCUtxKX'),
        lendingPoolCreditMint: new PublicKey('Qxvqqpwea4LZg6wekoZ24A3tDVQLjrwBakuT95P2auy'),
        lendingPoolCreditAccount: new PublicKey('f14uMWJLwj4WQRcFTdoHx2mHnGNcEYMR3meThy1Zswh'),

        rewardsPool: undefined
    },

    'whETH': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.whethToken.mint,
        lookupTableAddress:  new PublicKey("9YyTJSjV9YK4GgW4oKETJQcEJyHTCCDU1TwVFZu41Cjs"),

        lendingPoolInfoAccount: new PublicKey('EEokU6r9bBdTz1umHjGhkjgfikARsJzJBXhYxnTmN4Xk'),
        lendingPoolTknAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
        lendingPoolFeeAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
        lendingPoolShareMint: new PublicKey('Hk8b6i2C7PxFBPdd1TCrGssuZpCDEg4fh8yFuyHNJuJe'),
        lendingPoolShareAccount: new PublicKey('FNG4A4GWF1EsQVEjNrQMRT9Dr3H28TycQabtnsQF1MiD'),
        lendingPoolCreditMint: new PublicKey('7f7mU3tQvxD9t3f5ckhxcGSdwqoHHdWrJg43HXiUFWri'),
        lendingPoolCreditAccount: new PublicKey('7LvrwstXyshwVn7BPDgjR8Cndersy9GzbbGhyHwQcX3W'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('4LCHfdGYZVkNzmPrVt6LyvzEPyJ9uWgnna9Fm4GU3Mib'),
            farmingPoolAuthority: new PublicKey('GPMxFBWur7UWwpyCbU29jTvWgaoJJKVke2nwd6azJEyQ'),
            farmingPoolStakeTknMint: new PublicKey('Hk8b6i2C7PxFBPdd1TCrGssuZpCDEg4fh8yFuyHNJuJe'),
            farmingPoolStakeTknAccount: new PublicKey('4uW5PiPXRBQmcdU4Sreg1uJmfqBGazeH5ah2MnC1NSDL'),
            farmingPoolRewardsTknMint: new PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),
            farmingPoolRewardsTknAccount: new PublicKey("9unatyGE1mM46TnWpwhqgr7n176m4pZ8j1vtVhF84i83"),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('7LyyPUnM2MiAH1k8xN8pN2pQJZReCprFKS78e16tweud'),
        }
    },
    'SBR': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.sbrToken.mint,
        lookupTableAddress:  new PublicKey("65qNhu8BksERHPQrHTDFvBdrsYP2ns37wsCPsrpnDxS7"),

        lendingPoolInfoAccount: new PublicKey('6JZLr1xqoTtAgfAbENT43Vi8EUSUF3tpjH8UvyDKgDea'),
        lendingPoolTknAccount: new PublicKey('87WWEpoxgv7MyiBoxBhJr2oagssQvQZxrkNMw29grYvC'),
        lendingPoolFeeAccount: new PublicKey('87WWEpoxgv7MyiBoxBhJr2oagssQvQZxrkNMw29grYvC'),
        lendingPoolShareMint: new PublicKey('H69KjMFKL5PvKHrqDsvHU2TwbKorbuxWEZVD9uDS6rAu'),
        lendingPoolShareAccount: new PublicKey('4CpD8r9Dqk4R7msVF3tYDQ69hnbiP8RhjBUs93YCiSPJ'),
        lendingPoolCreditMint: new PublicKey('HYVJBnXQMe6BE8douWYMwb6Zn39K9RFYsCwnRtBHDU4X'),
        lendingPoolCreditAccount: new PublicKey('9RPCrT4f7fznw4Qmv4XW21MbjPHefKXSJnadq4E4cs2o'),

        rewardsPool: undefined
    },

    'ALEPH': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.alephToken.mint,
        lookupTableAddress:  new PublicKey("HnqaVYU81ombmkvmMcvFFn7eWLmpUV5suWVQozhPoF87"),

        lendingPoolInfoAccount: new PublicKey('E1q2MLRQz5VUKwTChn6rcG3FmJq8wVCRnXFYi8hfsQ9Z'),
        lendingPoolTknAccount: new PublicKey('5MZVBTyc7g2th9X6moQ6QCPmEVWFKf3joCRDnNpBuSyB'),
        lendingPoolFeeAccount: new PublicKey('5MZVBTyc7g2th9X6moQ6QCPmEVWFKf3joCRDnNpBuSyB'),
        lendingPoolShareMint: new PublicKey('28BSc4oqTLzhfRtTy6KDJu2N9PyxLHmD66hbd5fU9PYR'),
        lendingPoolShareAccount: new PublicKey('DXCnQvvJTszWBLJHky9KRryZya857a6iNVgL6ctcwuAr'),
        lendingPoolCreditMint: new PublicKey('2ohhYEUqjMZzt14h9PJYxSv6BmG3ohpP1wtVzGYvtA81'),
        lendingPoolCreditAccount: new PublicKey('BXwhcak89BXYj95FK4JJqg66wdPT4J42BXF1PmcR7mWH'),

        rewardsPool: undefined
    },

    'LIKE': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.likeToken.mint,
        lookupTableAddress:  new PublicKey("AVzWTUp9p7wsf9FhLZFj7Yjy8Airp9aAjEq3NpVwtL3a"),

        lendingPoolInfoAccount: new PublicKey('Dca4U2Z1FsmTxCprP4mno86TyU16MKNPXMaDL1Ss91PG'),
        lendingPoolTknAccount: new PublicKey('FhMA9GPpUJ47hVBxGEaDLFJD1tAkdKiJp6pGh5M8maU7'),
        lendingPoolFeeAccount: new PublicKey('FhMA9GPpUJ47hVBxGEaDLFJD1tAkdKiJp6pGh5M8maU7'),
        lendingPoolShareMint: new PublicKey('FwaGzJTkSNzut1DtBTynyytyye53Gz1mnv25PZGMJZVj'),
        lendingPoolShareAccount: new PublicKey('4wx2c4zPceth9sgSVuyokks7bKLoWzQJCix7CVuz3rNf'),
        lendingPoolCreditMint: new PublicKey('5hhMrMJuwu8jfRC2dfru6813TnFQvY4dRh47UZibBWTb'),
        lendingPoolCreditAccount: new PublicKey('DqYb1w1aN1ufwHRemY2oJ21eMNvoio8kykq1PhQARJZ5'),

        rewardsPool: undefined
    },
    'ABR': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.abrToken.mint,
        lookupTableAddress:  new PublicKey("2JihKu9C12DSAko4nKD5sXJT4gKsHFpZDJErpf533Vf1"),

        lendingPoolInfoAccount: new PublicKey('7iKEAvrGRqv4DW1v8qPGqijXeLwDtEzpQJpGsiFB7xvb'),
        lendingPoolTknAccount: new PublicKey('8TMXwxvfsks3JqgzeDoPjatNMqsUBdUjQSssvWTQbUaK'),
        lendingPoolFeeAccount: new PublicKey('8TMXwxvfsks3JqgzeDoPjatNMqsUBdUjQSssvWTQbUaK'),
        lendingPoolShareMint: new PublicKey('6yphfV68fCK1VXheNW4FDThyhU2rpDbFJgQMmB2aftYA'),
        lendingPoolShareAccount: new PublicKey('DxcbZLKM9a2wezBuKhgSCrbHZPwfEUNQv1RUoSzf3Vv4'),
        lendingPoolCreditMint: new PublicKey('D58Gfh9kGB3AAt4A6NY9XXRnbfYT33prxr7V9ZS6qnfp'),
        lendingPoolCreditAccount: new PublicKey('7uSmHk31Y6WxQ7ni9jEvVeW46i8fiEPhmRCT6S9VQcXF'),

        rewardsPool: undefined
    },

    'SAMO': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.samoToken.mint,
        lookupTableAddress:  new PublicKey("FUdXgKTfisX642gKDZReFtaRee8WdHiw4nrz4Y4y7JpP"),

        lendingPoolInfoAccount: new PublicKey('HJLkovTpxof1z9tVMuX1pWp1ePDx1zgmnGYfFMxFRAd'),
        lendingPoolTknAccount: new PublicKey('J198uwytk8CPejCyNM9TMPJcLPCky6pZwGwP3n1CUfto'),
        lendingPoolFeeAccount: new PublicKey('J198uwytk8CPejCyNM9TMPJcLPCky6pZwGwP3n1CUfto'),
        lendingPoolShareMint: new PublicKey('A9H3fAqkWmRnnFzXXzydZHzyLQdzK5o9dMejCL27tqq8'),
        lendingPoolShareAccount: new PublicKey('HP3sKy5xqLkoNnbuHRCPuFaQUtYskNnockBPcYo5PZut'),
        lendingPoolCreditMint: new PublicKey('E5ejPudazVxEdQUsS37g8yUn5HD22FBHsGEKWkGRDR3F'),
        lendingPoolCreditAccount: new PublicKey('23tLfFHXZR1tAimzVyEAdN7HWJWiqvjepaX5qBHkgQvT'),
        rewardsPool:{
            farmingPoolAccount: new PublicKey('J5vPqifPvVYcYfgwhAkrjFq8xnsJBjFhvSwVpTbpqs5G'),
            farmingPoolAuthority: new PublicKey('3ocZg6J44UVx6gWFC8PuTDumFSsVNh7W8Md3Cf5jXR6P'),
            farmingPoolStakeTknMint: new PublicKey('A9H3fAqkWmRnnFzXXzydZHzyLQdzK5o9dMejCL27tqq8'),
            farmingPoolStakeTknAccount: new PublicKey('7zLG1aWBvgwCgkDEsKHAkPgyuUGxdYPSDUPVoXi4LuVi'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('CYHmcVin4cQzdjcEcAYJki3qQuHMWq2NR15ienvRnXwc'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('GHM6YvgVKuoBEwcaMRJjQ2yEDfyCJg7CcK2eKTZ1k7pn'),
        }
    },
    'FTT': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.fttToken.mint,
        lookupTableAddress:  new PublicKey("GBUJCvdJ9DxVYUM9UTwBbJLnTJDHyvgU8roLBmshWFgq"),

        lendingPoolInfoAccount: new PublicKey('BWickhMLCKEmmy6kNqKT64KBiXtnNtPL7iNpjrwMfgqy'),
        lendingPoolTknAccount: new PublicKey('375Cp4ioTxaTN5FjVvKoPwGrEztzHWxvva8DeBnCtc7h'),
        lendingPoolFeeAccount: new PublicKey('375Cp4ioTxaTN5FjVvKoPwGrEztzHWxvva8DeBnCtc7h'),
        lendingPoolShareMint: new PublicKey('D9xafcA3jzwRWhuge74rhaCzE47LLJpAYSxKRHitvFmC'),
        lendingPoolShareAccount: new PublicKey('9c35AUJR3Kcb7Xh6SmCP9zhenQsnHBX9RzNJyvbh5mcg'),
        lendingPoolCreditMint: new PublicKey('HopVxw8AKrP2yh93adqNUCbGnGuMxE9X3zcNyGEp8whZ'),
        lendingPoolCreditAccount: new PublicKey('9Yy8FCyzyWaY71q5Rp3why9bi6jm3FoBwZpEQYj2NibF'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('5a6aVcyb3ApHpnD1fbNfcn5AhqZksfYsq5KXm33tLpJ9'),
            farmingPoolAuthority: new PublicKey('4PKEjjQRagLvwue1UaKCPdWXvenWumnWxJsFUKinUoEq'),
            farmingPoolStakeTknMint: new PublicKey('D9xafcA3jzwRWhuge74rhaCzE47LLJpAYSxKRHitvFmC'),
            farmingPoolStakeTknAccount: new PublicKey('864BHdyML3QbnCEiNGpRPFfuBuHQGmmuB55ty4LdTjft'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('3sDd94iEjVfhkT7jNos9ttxmj1qkKXyRifExX8iHJEJL'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('7FC7N9p9WQbQaTSYKeBfZkGeMHfHSTWs44645LphxRTY'),
        }
    },
    'weSUSHI': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.wesushiToken.mint,
        lookupTableAddress:  new PublicKey("5vnSYw9FpCWYf6NB1VxNhC9ouv7d1xLz9Cx17S2f46aW"),

        lendingPoolInfoAccount: new PublicKey('2oTEVdMpSRsamFeNYzqn3wifsPHRomA8TShgbTnDtTgN'),
        lendingPoolTknAccount: new PublicKey('4VAyWCoRbW5YXiV5Rz7pZy7miYBJLjfZYsykDuTnWyqj'),
        lendingPoolFeeAccount: new PublicKey('4VAyWCoRbW5YXiV5Rz7pZy7miYBJLjfZYsykDuTnWyqj'),
        lendingPoolShareMint: new PublicKey('EEhiV55jAt5JDpeH3GF4VGrStiPn5gCeWmqffyTp9B4E'),
        lendingPoolShareAccount: new PublicKey('5SDoskkCcV8NBJcP97g9CS7BEGLqXT5q2F6Ve2W3VN71'),
        lendingPoolCreditMint: new PublicKey('E2ocWnUUuBpUDLRSxB5VdUqr635DMPiWuV4PYDtiyGbi'),
        lendingPoolCreditAccount: new PublicKey('L9idBQvg4SKzdtHPgZijpJGkDT4WVbhnA7KmTVPT477'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('21WzBAky2CbcmHvrxgyFhCytdF3xQA6YdzWXN7JYk7Ga'),
            farmingPoolAuthority: new PublicKey('GE7jFYgkUc533u1V38Y5hN1icrdAgCTgftHW6q2tu9ZV'),
            farmingPoolStakeTknMint: new PublicKey('EEhiV55jAt5JDpeH3GF4VGrStiPn5gCeWmqffyTp9B4E'),
            farmingPoolStakeTknAccount: new PublicKey('ES5w4AaFNfjartY74tw3dr8XjLc2DLbFpD9qmXagnE83'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('DWy2TzewHtoYw6QEczXvJoDRk6rwNrdyGkSo7t5hTzCM'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('5R1NiQM9U99DzMN21Kx3hYxfQAupEVeQ7tPsmNNa5KVo'),
        }
    },

    'weUNI': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weuniToken.mint,
        lookupTableAddress:  new PublicKey("Hb4ZHgHCyyzJWfksKyr8mRB7ydvH2SG76AC5pXkv6j9G"),

        lendingPoolInfoAccount: new PublicKey('H4uTQ8CCFJYVQYZ8c2bH7hHGrrok6k4pWDhk5NQt9KR8'),
        lendingPoolTknAccount: new PublicKey('E3fN9Wqesn2NbYGPjybFo5HTMpcyLPnWNHovQpQqqw8G'),
        lendingPoolFeeAccount: new PublicKey('E3fN9Wqesn2NbYGPjybFo5HTMpcyLPnWNHovQpQqqw8G'),
        lendingPoolShareMint: new PublicKey('CGj7e1g4ojW1RhSocF8AKWxHFaqCQjK8kBsbHqNB4BxP'),
        lendingPoolShareAccount: new PublicKey('8BtR6Dzg4fLmLv4ZZdX1x22WYiPHvp8AtvRFgSMQwxdw'),
        lendingPoolCreditMint: new PublicKey('74WmdEZG9rjvcAX2yczd5h54QeXnq62sVNLMz1DU2Abh'),
        lendingPoolCreditAccount: new PublicKey('8kLAk9EiLV6qePNEtjnDLyWbRsySgMPSTihdWAEEv9H9'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('ArRauaQ8xnFMdNdjdJe5vCp1h2v8iWWeHSNjf2dhMGdo'),
            farmingPoolAuthority: new PublicKey('BuujLrfraC8o5c6257Fv5jsWkoWwAn4W66eKb121mU6C'),
            farmingPoolStakeTknMint: new PublicKey('CGj7e1g4ojW1RhSocF8AKWxHFaqCQjK8kBsbHqNB4BxP'),
            farmingPoolStakeTknAccount: new PublicKey('5T5YxRxXbTidTpbcJqVdGu3UBcSc6x2W446tLSEfSEBA'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('3S6kQMUYhGKvXMRM74nsPkhNbx8PrUEsw4NdjJMbaF9K'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('hbh6ziFx6FRWdoRGqtTuRVFwr9i7iXhFNtuN66ufK4B'),
        }
    },

    'STARS': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.starsToken.mint,
        lookupTableAddress:  new PublicKey("ZdDUWCtVYd8GZwcrJ9FhUBX47uRgyj1i1D9G6PMizoq"),

        lendingPoolInfoAccount: new PublicKey('Cc4PGrJGqbt4XmRVbSD8N6q3MMRRY1LfdQtN3w3Lq4Wr'),
        lendingPoolTknAccount: new PublicKey('ASUq7tK1U985yECszqCwRgXBAXDcPt9DNVdD5vC7pfn5'),
        lendingPoolFeeAccount: new PublicKey('ASUq7tK1U985yECszqCwRgXBAXDcPt9DNVdD5vC7pfn5'),
        lendingPoolShareMint: new PublicKey('A6Xhvhifj8B2Ui3SkNiW99DKorRAxmWx1Vc7XdicNTX2'),
        lendingPoolShareAccount: new PublicKey('Hg1rSRYFZoPhVwBoy38ZBLgo71Thsixn2SRWoF7fvRgs'),
        lendingPoolCreditMint: new PublicKey('GYUmSz3YvTNJ1cbc8EpUjUN2rEC32ToVVPhJoV9E5zMB'),
        lendingPoolCreditAccount: new PublicKey('6w1dtzUaTP4NHHFAMGPuoVXeyGorTvrVrpJU6R5HQwaT'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('HJTeZJx5i3eUPZ1pQm4S4Qxag3rBgbjskUpMEyix6BSc'),
            farmingPoolAuthority: new PublicKey('FRRd217i61AE1fLU9So9wnhAv3MVe1f9syiXC8At2zK6'),
            farmingPoolStakeTknMint: new PublicKey('A6Xhvhifj8B2Ui3SkNiW99DKorRAxmWx1Vc7XdicNTX2'),
            farmingPoolStakeTknAccount: new PublicKey('Gwav4uQN4MFd75F5dz2dRoy6yVjXCa6KUWb6FejmmUTr'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('B8nZD2YHRB6pL2Z8n88bzkmC6fiuAoLxZREwZNZtWaZS'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('4cfX9NwBMbpcNRzGXMor8FwLD5C1JiWwHxpVXJEM5Wxd'),
        }
    },

    'weDYDX': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weDYDX.mint,
        lookupTableAddress:  new PublicKey("D1n5Z7K2b5zSVkqjZZd3zP9pFQpRQCiXTjQd53bpg9co"),

        lendingPoolInfoAccount: new PublicKey('HTBxsYGGAfL8KKPNCVbCKnB3i8JbwCGCPDb27pKVwokU'),
        lendingPoolTknAccount: new PublicKey('6oKdAxTYQg4kQZWo5kgoF31nqg2hWNHv2iFmvAnhUSSX'),
        lendingPoolFeeAccount: new PublicKey('6oKdAxTYQg4kQZWo5kgoF31nqg2hWNHv2iFmvAnhUSSX'),
        lendingPoolShareMint: new PublicKey('BXuDGvSLgr8KJyh54movhkU9gYiNyEVn8Xf8bYYCWnru'),
        lendingPoolShareAccount: new PublicKey('DKY2bCEwfpCUUcgpQsn7ihHb6tNj2hXTuuXutjQ9fs32'),
        lendingPoolCreditMint: new PublicKey('GoEZTkTJUY3xqErirC48VKBTFC4Xs6brux2DezL84DL9'),
        lendingPoolCreditAccount: new PublicKey('DstiYmSty3GxRcpibiWJw4k8heN8WHo4mtKdKkaLRtv9'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('AKV6xALB9F3P265K8AWb5cWhs48aKJM59US3YUyGpaGT'),
            farmingPoolAuthority: new PublicKey('J4AyiV9Wot2yhb4ssg7Ryn168gEaLD8Q29bJmJ2bzt72'),
            farmingPoolStakeTknMint: new PublicKey('BXuDGvSLgr8KJyh54movhkU9gYiNyEVn8Xf8bYYCWnru'),
            farmingPoolStakeTknAccount: new PublicKey('4w8ykwTLUQJ7djC8McHn5UvowRbS9LJxkhjt5JwMUmZv'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('8UpfHvx5THUDM7TFd9tmuSdF5CzAQJZ2ntcZqEwM8Gbi'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('F54Ncr7Rp5of4G2xDe2GXYwDaxZtUmZF8mKaNrmX9yZj'),
        }
    },

    'weAXS': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weAXS.mint,
        lookupTableAddress:  new PublicKey("3JqejHuSfGDvubrGrKqGeiXbJbBRU3FcWXeUNbLRV81o"),

        lendingPoolInfoAccount: new PublicKey('2uzXxLcburgpzYKyNP2sswDLLmmD8cyiJ3XDt5jFY1hL'),
        lendingPoolTknAccount: new PublicKey('BGZ1sfSqJGB36rd24A3vaPndyY5zaCJBmtaURAPFLy7F'),
        lendingPoolFeeAccount: new PublicKey('BGZ1sfSqJGB36rd24A3vaPndyY5zaCJBmtaURAPFLy7F'),
        lendingPoolShareMint: new PublicKey('FRwMKg1LnCAQftEzC5M2B6MEY256aH7UuYkVr3p2yNoJ'),
        lendingPoolShareAccount: new PublicKey('4k6o1Q37VxeMfjninTjzsEuHfcXFhrXyuARzp7x1fn4J'),
        lendingPoolCreditMint: new PublicKey('5ZTnVWq5W6iGGJwr5GiE1xZHz4iNTjo4MFHbictBSVV5'),
        lendingPoolCreditAccount: new PublicKey('95kjVhqUzgVLNLfkqbta6QzB8SW14mBaPhsTYPnSsyzR'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('3unEgqCbfVUKBPGNnXxCmyqiadpUXoHHL3PnHJpz2iLJ'),
            farmingPoolAuthority: new PublicKey('AfJgpNYnuTJshcc11B6jFZx1rkDG95Q9TmCe2BAXDLYo'),
            farmingPoolStakeTknMint: new PublicKey('FRwMKg1LnCAQftEzC5M2B6MEY256aH7UuYkVr3p2yNoJ'),
            farmingPoolStakeTknAccount: new PublicKey('2eL4UeveyeFaBcLReHDR1f9HaQnySyADWTDppTsRj8wZ'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('EXioodf1RpSq55kq4LavxkGMFUZfVqDYDwZgWqjVMp3v'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('7AFdhnbXsSVJZezG7Bc2necFSA3iXN7H3mnb9eLTyMAf'),
        }
    },

    'weSHIB': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weSHIB.mint,
        lookupTableAddress:  new PublicKey("BiVfd4F8oZwWfUETL4KUUtveLyUWvv47jLfBw4hN3YjU"),

        lendingPoolInfoAccount: new PublicKey('39cozrAUvLyLJk4Lp9QcgxhVzJXiAN9pib9N4omTE4aU'),
        lendingPoolTknAccount: new PublicKey('wGKjnj2Vjq5HTVjRURnCbeHkjSi3nDGkJXpu4sf4atT'),
        lendingPoolFeeAccount: new PublicKey('wGKjnj2Vjq5HTVjRURnCbeHkjSi3nDGkJXpu4sf4atT'),
        lendingPoolShareMint: new PublicKey('4PsdDpNALxLQR3WSfvNxsrJbsP39xe6jXkGNTBeQfw59'),
        lendingPoolShareAccount: new PublicKey('FVuokDqsiq2LAoGbFMZFQBy67XM7dASpBJC7ZLdajVNN'),
        lendingPoolCreditMint: new PublicKey('7rQVZPoG38ZNKWP4cVrVJN6pZYUJpatx8u7Vih2ELTxW'),
        lendingPoolCreditAccount: new PublicKey('C9xwWZqEotP465frvUbxhnkHDoQDJL7vCSvZ2Yw2MpTy'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('56vAHKAcTXrrnAfGn7nvzogyRa1uCjp3vEFx65xmiGKG'),
            farmingPoolAuthority: new PublicKey('2weAmFuKGfvHwFHakrpCtrGQv6W4SEjmxAfSFXEVe7Z2'),
            farmingPoolStakeTknMint: new PublicKey('4PsdDpNALxLQR3WSfvNxsrJbsP39xe6jXkGNTBeQfw59'),
            farmingPoolStakeTknAccount: new PublicKey('Dgqak5sUd7xMHEw4orSoEL9KPTRCwgdNPieqSjR2eroT'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('6UTFjnXumDGU2s9ZuUFw3nVCjo33dikKVaX7hTRdnwhV'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('GR7CUSApUa1NKRkwyxL3SBgVw9cwfN9Fg8G1Vb9NZmfV'),
        }
    },

    'SLND': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.slndToken.mint,
        lookupTableAddress:  new PublicKey("844BrNhSZpsujBcci5D8f1oJ3TuEKGnGcpUoDChkJEj"),

        lendingPoolInfoAccount: new PublicKey('6zAC5T2ADWHwE6wshtvVXkaJTJMhW32X1aaicbsKK7Ko'),
        lendingPoolTknAccount: new PublicKey('9G2x27Rnv3hBvyDTFTs1JpFYKNhn6zD2fSb6s4eyzetD'),
        lendingPoolFeeAccount: new PublicKey('9G2x27Rnv3hBvyDTFTs1JpFYKNhn6zD2fSb6s4eyzetD'),
        lendingPoolShareMint: new PublicKey('CTEoJD8NrtUxUf7WSkQHhLpMEenTSKes3iuungsbJHmd'),
        lendingPoolShareAccount: new PublicKey('Aff7WPYT1qSSuJYsLA5abJYvWfBS8ZREAgcQ66YMKtjF'),
        lendingPoolCreditMint: new PublicKey('5pLYpkEjWf5xKBbKp8LmE9JxwKNM1gtgJvykS2mYWdX3'),
        lendingPoolCreditAccount: new PublicKey('5oAxNCKqbcMzjE9ZJ4DH1DXCbKSfqTwBzi11V9VXLymG'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('AndszwG2cJHusYys45U8U2DdFw4tRXYSBi4JTdPM3TnM'),
            farmingPoolAuthority: new PublicKey('7MqUZGbUnMqjtxCwWj2qMu29nyA9CJnYizGXgnZAJF9E'),
            farmingPoolStakeTknMint: new PublicKey('CTEoJD8NrtUxUf7WSkQHhLpMEenTSKes3iuungsbJHmd'),
            farmingPoolStakeTknAccount: new PublicKey('8nPYRSSD689KoyB61QSnvgUXmCY7rDcXiscwFEpck895'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('GLhCZ5yLbxXAxNUW1pSqnaqim9fFxFBVsfRfG1D3CT5H'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('5TnnfA3d9CtfQ7DRin1x3TmKJFWsk6bfgznGQRAotz7F'),
        }
    },

    'weMANA': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weMANA.mint,
        lookupTableAddress:  new PublicKey("DP6cPrcMMKvB94Ufhi8ixHKsthjtEvPc8WxD5TBEuQFX"),

        lendingPoolInfoAccount: new PublicKey('54fV2miWuFnvSJxPXk7j2XfTap9nCdU66zspZLnz5Buh'),
        lendingPoolTknAccount: new PublicKey('FWse57pdb6bAW4DpByaE6Fndoe7LR13f8xYWsU9ytuTt'),
        lendingPoolFeeAccount: new PublicKey('FWse57pdb6bAW4DpByaE6Fndoe7LR13f8xYWsU9ytuTt'),
        lendingPoolShareMint: new PublicKey('EFpcLPMW7wGj63j6A684Xd5K8qwgN7Y5ymgyNjNe7Azh'),
        lendingPoolShareAccount: new PublicKey('5W1EnAuzUe2tNWi5fVietgkGr41q8rjU3sRn4vrTEnds'),
        lendingPoolCreditMint: new PublicKey('8nDvhnMe3gjVZXsEL3EANXmb7qXDqkwsiBH2BG76gdGs'),
        lendingPoolCreditAccount: new PublicKey('HzLE6x3qSHvpbf2jRWinc4EcmAQhGK87r5CGkbrFpE6S'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('7AfHW4jPUTXGpnzedwuypu7r3idWmEb8NzFQ2Ygk2f76'),
            farmingPoolAuthority: new PublicKey('vnfDj2ySKLZcDrii6uWM8btJF4WrDXFJF6jDhWr6c1T'),
            farmingPoolStakeTknMint: new PublicKey('EFpcLPMW7wGj63j6A684Xd5K8qwgN7Y5ymgyNjNe7Azh'),
            farmingPoolStakeTknAccount: new PublicKey('Hr2zxBzTmDiShuTuiy1t3nxLjQBJzPUSyoeKNDDNCHCG'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('ERyNXnfohenMiJh1wHWdFKHMGf4nk1u8y16WcQzUVHRD'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('DwVHqQS43mG1oLomCQKhoP821tRsyKraDdprV2rP1FgR'),
        }
    },
    'weSAND': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.weSAND.mint,
        lookupTableAddress:  new PublicKey("4cSqxuBRr5M7K1DcHDpKvHQu6DEAHvLmVh5PdNLS7dsU"),

        lendingPoolInfoAccount: new PublicKey('FKedcrS3MvvinwYfdy5xsidfBAmuDxRG8rG2kFU43NeV'),
        lendingPoolTknAccount: new PublicKey('E9AaQk4HBnJoZDiws4RcxnfPZubQ4zpJY7YCo5TbBvzj'),
        lendingPoolFeeAccount: new PublicKey('E9AaQk4HBnJoZDiws4RcxnfPZubQ4zpJY7YCo5TbBvzj'),
        lendingPoolShareMint: new PublicKey('CcJ7ukcpXX61dv1hcmVzEfHg7aDMoThdZCzAquCLcTg2'),
        lendingPoolShareAccount: new PublicKey('5bqyvMyCvbTKbBRP1dkjauecW7uhpTvyj8NZU76y5qyt'),
        lendingPoolCreditMint: new PublicKey('HP9mJjAKYgR4TS6dqYB4mrEEmPHfgGztgTGjcrodDjvF'),
        lendingPoolCreditAccount: new PublicKey('HbtkkPyiETCyDADYPPE58F4nisoDdhRjEr7R8GGKD4j3'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('DDPBcfVKWyqS9Qhj8jsddVTh8KtYV1FBGFfuytZpChmU'),
            farmingPoolAuthority: new PublicKey('9xRSSsvFW6CPG2Wp2ZCuyZ4sUD44VjxWxz2tAQbC4AsB'),
            farmingPoolStakeTknMint: new PublicKey('CcJ7ukcpXX61dv1hcmVzEfHg7aDMoThdZCzAquCLcTg2'),
            farmingPoolStakeTknAccount: new PublicKey('DcSRFQBPnPDVdURt7rNJoH54D65Vqk7nU2DjPza422vh'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('8znXDTDC6QtG5WxAhPW1KcmqxtumxqBGm9Pu5TH3J3nq'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('8EqG3WzKDhy59bQwB3pimcwBjRkTgbFoRGAL2AiAy2Kk'),
        }
    },

    'CAVE': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.CAVE.mint,
        lookupTableAddress:  new PublicKey("71kSKhQJ2nFBWkseS4VkKQokVi8EDCgGfzYWjMjc6Vjk"),

        lendingPoolInfoAccount: new PublicKey('4hoQV8MoKnecGKuzvo29sR2jtkxkmiQHyzNXctZ3F9Ka'),
        lendingPoolTknAccount: new PublicKey('YsP7Jj2zdbyyAqjuSN7cVJSG38izimcJXvtdMJ639Ao'),
        lendingPoolFeeAccount: new PublicKey('YsP7Jj2zdbyyAqjuSN7cVJSG38izimcJXvtdMJ639Ao'),
        lendingPoolShareMint: new PublicKey('CYMKtPi9KmaGJVWm6A2v7zbR8ARh49r3qLPBbdFiVzf6'),
        lendingPoolShareAccount: new PublicKey('Dzg2xe7wcKeC5PF47Nv3hVfo9tXEch4cw6gobZRknhEs'),
        lendingPoolCreditMint: new PublicKey('Bby7VbTHvpseY7KFCwpRM5BnwVrhS9ReCaZNcHMcSV3i'),
        lendingPoolCreditAccount: new PublicKey('mBEqr9wEJR2fUFvjgzYCAKBQTaia7N5j2DQnFMgrtzP'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('66vLuAKSt93r5Psvj5pfYRFLTWsgqxXJ3SFesSaMEDfo'),
            farmingPoolAuthority: new PublicKey('3dhyC9d2Bcb1GSWbqAhyR4TB8qpGQ7p3ELEVdCBMSWZo'),
            farmingPoolStakeTknMint: new PublicKey('CYMKtPi9KmaGJVWm6A2v7zbR8ARh49r3qLPBbdFiVzf6'),
            farmingPoolStakeTknAccount: new PublicKey('AVig4LiJwdFzaQCNC3yYs46RsomoaagS6dpSmywdAbVE'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('Fph8QSq4QkuAxk1Fuc4mCgvojU6V9ug7UYhXij5GqzVP'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('BuWFC1bCeLcCrXxR1sUY66RJbgu9WYZLcEdFHMoYHpKu'),
        }
    },

    'GENE': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.GENE.mint,
        lookupTableAddress:  new PublicKey("HFKYALQcRFkM5S35fjXz3aCoyPDwKeGJtXzs5yMkjUFw"),

        lendingPoolInfoAccount: new PublicKey('FrgyPPEPNC25ihob4ZobP3eYjh8uBoxLiobdMDX2EsMc'),
        lendingPoolTknAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
        lendingPoolFeeAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
        lendingPoolShareMint: new PublicKey('9z3eDHueAMdUtym9Q2ku3hi5YXHTYjpFLp1YEEnxUHPV'),
        lendingPoolShareAccount: new PublicKey('58teG2GNEoeYQUBa3VxQe5ZH5SPCZ6nUsrCuN5akbaQS'),
        lendingPoolCreditMint: new PublicKey('2KR5Q6zCik6kFyiWPMMVCKC5HDAP6joGNhKhbEv6nFdY'),
        lendingPoolCreditAccount: new PublicKey('7LBnkdaCZsM82t7G5MYKBoYAZetcnsqfU1cABxnPoquw'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('3EhxTvGjycQSKBY4EFz7MGA5Ke7rf39oUU2nM9qBP6Cj'),
            farmingPoolAuthority: new PublicKey('4hqgkEYCFb736sSpxvrxD5Vvq1m7FdJKzfjinrr7xHSd'),
            farmingPoolStakeTknMint: new PublicKey('9z3eDHueAMdUtym9Q2ku3hi5YXHTYjpFLp1YEEnxUHPV'),
            farmingPoolStakeTknAccount: new PublicKey('DBrkDtmFWuXqpS8svgpXt2xLpQoJQQz5QUNeMWtnzh2A'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('EfTo3cTDREravKZQtcG7cYSHkLfbHP6TLfxFnFMcFYTE'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('5GhnJNhPU4FeAeX8zPjEGboSHWJcnu9JsqSzNDeYMb4q'),
        }
    },

    'SONAR': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.SONAR.mint,
        lookupTableAddress:  new PublicKey("CUcpP2uUw77Ftvhdppy2SpcRsDQ9kgW4qeG6iWNKeiC1"),

        lendingPoolInfoAccount: new PublicKey('3USSy3sAZSCnUiCZJaTFt5hCHWSw87kg8tNPaEZh1p9D'),
        lendingPoolTknAccount: new PublicKey('2F2yrLZQa3av7PxW7vdqiYBV4AwTbkCdswgN2BYGgtvs'),
        lendingPoolFeeAccount: new PublicKey('2F2yrLZQa3av7PxW7vdqiYBV4AwTbkCdswgN2BYGgtvs'),
        lendingPoolShareMint: new PublicKey('FvHrhBTTgo7q8uDX7gN5f7YzSXMrf3mwYtkay5NvkJzg'),
        lendingPoolShareAccount: new PublicKey('DPMixAHcMsryStgytYBhvvtR2WbvyRxkMwG147NmXEPS'),
        lendingPoolCreditMint: new PublicKey('HsKN1EC5zcArg1yoq1tMg7JKfxPW9m644mqCphrbLMC'),
        lendingPoolCreditAccount: new PublicKey('7zqtZ8LhBYUUXoDCwDFcdLgNkYo8tZZqTdoFJqAL5ie8'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('Fa4k8YVF4MKQt7DMrnJSRHHG2ffaGbNEJCYegf9bX548'),
            farmingPoolAuthority: new PublicKey('E1251uikpS6o6YebAy55DqQP3T9Eb57vWdSQ55ruSrqo'),
            farmingPoolStakeTknMint: new PublicKey('FvHrhBTTgo7q8uDX7gN5f7YzSXMrf3mwYtkay5NvkJzg'),
            farmingPoolStakeTknAccount: new PublicKey('xfrTgSaJnDaZMMoDSowbVQdKrxu8aNxxw2CiQ3Dzm3x'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('AxdF3rEjwggqz7gtLQqossiyGVwduSskBceCEJSrHxUH'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('3zjufftYdJkQaZohD4Entvsj4k4QkcBKSQ3kaNwfLPF7'),
        }
    },


    'DFL': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.DFL.mint,
        lookupTableAddress:  new PublicKey("2Q144LX9XXacpEwNMFMESnuZhCNpPrABYun3AZJxnYHB"),

        lendingPoolInfoAccount: new PublicKey('74fWq2xnHBP1W6QhLDazCZAuZvp9XY3ck1PGNJg9hfhi'),
        lendingPoolTknAccount: new PublicKey('5QNHLaujxMgFKYaJM55uYb3jyMGgvspizg7S5eVAD3d8'),
        lendingPoolFeeAccount: new PublicKey('5QNHLaujxMgFKYaJM55uYb3jyMGgvspizg7S5eVAD3d8'),
        lendingPoolShareMint: new PublicKey('CGhMaGeVLxxQGJh6Y2bEYfLazumuFyEXpxF1UgrcMRJi'),
        lendingPoolShareAccount: new PublicKey('EHUF88xvJZyXzosAQ7Jzx5ozdvxCfZuwppSEo5b9pe2S'),
        lendingPoolCreditMint: new PublicKey('26Eo8VcgDuNZSn8x5infdYxDKs7mYZj4JKxLUCkKP3DV'),
        lendingPoolCreditAccount: new PublicKey('GYZgKQmYZBosdS3PsSRv83CdPFAtTRXRZaqdFVUnumiw'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('GiKoJhe5TN2DN2H9iW57P1ewtzZmi9vb8YhLMEVbweAH'),
            farmingPoolAuthority: new PublicKey('Cbf8HLvkmch1HBb2XQf8LHhtPtECLrBDxsR3bCXZ5tA'),
            farmingPoolStakeTknMint: new PublicKey('CGhMaGeVLxxQGJh6Y2bEYfLazumuFyEXpxF1UgrcMRJi'),
            farmingPoolStakeTknAccount: new PublicKey('bMcNaYHuVVCL6PFqXGECDD2EgKSKUeVNzZcEKYUMe3T'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('7DzVmRce9QgooSrLpN1khQXtYv1AqUncc3BoBWvQi1ZV'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('3sZNEj3a6pkCVvZBSGYs9L4Komyd66vbcStckQSpZ32A'),
        }
    },

    'stSOL': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.stSOL.mint,
        lookupTableAddress:  new PublicKey("kTJ8hWwRV6vmj7feyD1ppNk7rxiuPMmhrjoSmHJ75M9"),

        lendingPoolInfoAccount: new PublicKey('9ogtxmnUF94KaPn3dB3unT5yyu7rpzSwc5igysgqFxrU'),
        lendingPoolTknAccount: new PublicKey('85pJTrAVdjHNvgCcUtefwkSe9RDKnHueyvs2uTocWmWs'),
        lendingPoolFeeAccount: new PublicKey('85pJTrAVdjHNvgCcUtefwkSe9RDKnHueyvs2uTocWmWs'),
        lendingPoolShareMint: new PublicKey('HyxfDg47HKS1rQUXWvJH2XQhwEJM3AqrHU7sK9bSNt5h'),
        lendingPoolShareAccount: new PublicKey('3H64RCjRcHEJAJK9mZ3q1mBZJ2hWuv3tUvXVY7XgFL5L'),
        lendingPoolCreditMint: new PublicKey('Hhh5mQQMuWjmyUNyYFDtuXKFp9wptPuLYvH9x98FSDq8'),
        lendingPoolCreditAccount: new PublicKey('CRorEh6T7aXamCsjggckCMgF1ewVavo6CfXTPNkipson'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('J7Ny8VBzKHqVxbi8RAeNHatxELF61KhPCeV7S6m3AVa3'),
            farmingPoolAuthority: new PublicKey('2q2cWnsuSBr8AukmhPj6memCY4qEqaajYfpjQhofGhYP'),
            farmingPoolStakeTknMint: new PublicKey('HyxfDg47HKS1rQUXWvJH2XQhwEJM3AqrHU7sK9bSNt5h'),
            farmingPoolStakeTknAccount: new PublicKey('8Ki5bPSCjEMxDdzjHNmZyowtSEXFjb5YXEPCysWsudo'),
            farmingPoolRewardsTknMint: new PublicKey("HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p"),
            farmingPoolRewardsTknAccount: new PublicKey("9TvniKw9GPczkYZLA5Ba43LmvkfgbRmuPJnVMJwGxgPb"),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('AXbZA7hRj7uyNUVo6Bo2UYSdTET4V6Lck8guWYudW85d'),
        }
    },

    'wstETH': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.wstETH.mint,
        lookupTableAddress:  new PublicKey("GwbAR95ACbjJXJmgEoppAq43MbzV4gDxrabAmgtRZHMs"),

        lendingPoolInfoAccount: new PublicKey('8jcY9dp6DEaDJ2GMSbpNoURsicsrWyTLiBcbuXpBKP9r'),
        lendingPoolTknAccount: new PublicKey('4JGChfCLhLJU4KpDYpDxxR45ML4q46CmnNt5jE6kuoRj'),
        lendingPoolFeeAccount: new PublicKey('4JGChfCLhLJU4KpDYpDxxR45ML4q46CmnNt5jE6kuoRj'),
        lendingPoolShareMint: new PublicKey('8mvQbjHxj8ofVqy2mYLDZAW5XFMfGqqwnvBRnr9RZC4c'),
        lendingPoolShareAccount: new PublicKey('A66vvGR8iVjoGhP5dCS8WhVGb7ufpRtYCXYFUEHwNece'),
        lendingPoolCreditMint: new PublicKey('4HT1nnQTiJsXeJWyTJNvZDGFHo2M5omcu419wXEUkr39'),
        lendingPoolCreditAccount: new PublicKey('2zL94EMfUgbM23Bpt8pvPJuYuBmXQoXH5GKN95n2oZoo'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('BgjHgmtjnkJV4dtdS3fADrQGU56ouALhN9nJsrcp2w8e'),
            farmingPoolAuthority: new PublicKey('7Yhs89VWndHJxTqsafLh5DkSVgvDShdTKh1qJcBfztw2'),
            farmingPoolStakeTknMint: new PublicKey('8mvQbjHxj8ofVqy2mYLDZAW5XFMfGqqwnvBRnr9RZC4c'),
            farmingPoolStakeTknAccount: new PublicKey('D47KzoXbKu6vKzQ2kWFV8dmPJbp6kgCvLJ8bHW41LpB1'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('D2Xs5V3ZSYBCV12V2Li2AmhSCCfjj6oVyYHQqkaaUVC8'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('FAViQgPJLzNBLQHV7RnMARxYkwgh3Gd55zMtgjgbYnkx'),
        }
    },

    'wbWBNB': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.wbWBNB.mint,
        lookupTableAddress:  new PublicKey("AJMcPqmPMnPonDKCUHMyTF8sVCkGaHxMzQdEPKtY3QbK"),

        lendingPoolInfoAccount: new PublicKey('6RnKftFywvw8sceeWUM623BYyMeW216276G4atZ23CrF'),
        lendingPoolTknAccount: new PublicKey('F7SQgbgunwx7PKc9i5zXJfSNsjU9xM5P8Sb18FCUBKyf'),
        lendingPoolFeeAccount: new PublicKey('F7SQgbgunwx7PKc9i5zXJfSNsjU9xM5P8Sb18FCUBKyf'),
        lendingPoolShareMint: new PublicKey('8EzbLKBQ8Rest1SWUtZR6zFvYTo4cCaQ73ni8sF9vtjA'),
        lendingPoolShareAccount: new PublicKey('DgBnJvW9iQT5sP5YyVHeNbRjG8Xd2d53f19a2451eXkV'),
        lendingPoolCreditMint: new PublicKey('6bMAnnzp3pim8wd8XypLGuqVFQ3LMuY3vkRRse1DkZ7o'),
        lendingPoolCreditAccount: new PublicKey('CFsjid6WFmsyZozJkj43ssA5rRmYa97mzvfs8eRYqBeZ'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('DyB3NGRQRAQcRowaxFhE8tBzB2kV6JcGCHJWADwVjFw9'),
            farmingPoolAuthority: new PublicKey('FFVAs3tsHUjmGBKeHGex6b1bfyAfcJbwTPhrxtubMMDo'),
            farmingPoolStakeTknMint: new PublicKey('8EzbLKBQ8Rest1SWUtZR6zFvYTo4cCaQ73ni8sF9vtjA'),
            farmingPoolStakeTknAccount: new PublicKey('DuBFjRWMaNUbvfr2FgBNRuqMuRYuPcYZFRVFXHyR5wjx'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('FaUXYgAiMe3eSX11WyXZSx47Z6SoWnHvvMRPYR4WPXea'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('6qvfR54nRwWMXSP18D2Y5qKnwmd6AVJ9TKdjJNmS7yGr'),
        }
    },

    'REAL': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.REAL.mint,
        lookupTableAddress:  new PublicKey("BpD3iVcg57YBQ7VCiP4H1oR4Zc5gqCpSwsrmA1AeosQx"),

        lendingPoolInfoAccount: new PublicKey('HVSKDFRtZB36U7W6c7Sy5hKajB5WDWszhb2pbLUeXUN1'),
        lendingPoolTknAccount: new PublicKey('4FYHFdepwoHSQvE9PouRCUszsqY7bKfRKBUtTjKvCmGm'),
        lendingPoolFeeAccount: new PublicKey('4FYHFdepwoHSQvE9PouRCUszsqY7bKfRKBUtTjKvCmGm'),
        lendingPoolShareMint: new PublicKey('BG1Jn2paDc1LDK4JL76jGStpwDctwi3tBAuAsXiYocQy'),
        lendingPoolShareAccount: new PublicKey('2iuEmnCe2eW3GoKaV6oc7Cjui86PLe5DVarydm8WEmpN'),
        lendingPoolCreditMint: new PublicKey('Dzk92RfPmZom67Xyi8LMcW33PvEGSiHi2Xy1sXBEZ2VH'),
        lendingPoolCreditAccount: new PublicKey('9rGhZmo3ewf9Y6sVWG59ZZnXHxoD5byH7HT8xE9Uus4Y'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('3QotGt94vKPPRNnpo7NBsNFLTFk943Sz6ytfGhXbuBe7'),
            farmingPoolAuthority: new PublicKey('6gfzEHuoqqM4M8EgxvvdaFTNAfiUmpJfRyDE3TTQsVGv'),
            farmingPoolStakeTknMint: new PublicKey('BG1Jn2paDc1LDK4JL76jGStpwDctwi3tBAuAsXiYocQy'),
            farmingPoolStakeTknAccount: new PublicKey('9YeMPs71eUtoDHTAVVtijUKrmvqrjxeqUWtVt2d1NdjP'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('CXR81V9nHZgoz21heAeRyqygaJAjhyyH6uFNDqWKmrqx'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('53FnLY8QE6vbxzd7MaCza9GdjV7X2RGkHNJbidZ8Moe9'),
        }
    },

    'SHDW': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.SHDW.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("37Fuw9zCDDaohHxY12cw6viNJ4J4qZysRYQynQ75Fo9F"),

        lendingPoolInfoAccount: new PublicKey('8NvPwUxtBohPg45bAmzzB45qLajpfptMVgqgu5vmCNgi'),
        lendingPoolTknAccount: new PublicKey('EoVqoTtczavGmATCagSQU11c74MkL8enp96fGkQz6uqK'),
        lendingPoolShareMint: new PublicKey('AJu1s738dGsZ8mV2XKTqjuMiAiqNGaRsixTR4Czx4mJ2'),
        lendingPoolShareAccount: new PublicKey('48YJFjo3zLGSkUDXpa8mte3EMFNSPvy6pE9wUhoPSLnH'),
        lendingPoolCreditMint: new PublicKey('3fu3y5yGbBPqDpwKjN1PsVurm4af6uQnpkkuSo5SxZQa'),
        lendingPoolCreditAccount: new PublicKey('2zxQFrSGMSWbHMzMjxDN8ceqgbJVUyyEEwR75R5zzh4M'),
        lendingPoolFeeAccount: new PublicKey('3H3QXT9oEG5DaoWfQ727jgJdhVewgrTNc8jsGgBsXvQE'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('Qy66gmV7hqvTG8FtwfLjbYaKrxTD953xMWw2tpLfyHs'),
            farmingPoolAuthority: new PublicKey('3b7sreFukzQB7bWBVcFrQgxxoCiD34HPKupzh7gNrRi3'),
            farmingPoolStakeTknMint: new PublicKey('AJu1s738dGsZ8mV2XKTqjuMiAiqNGaRsixTR4Czx4mJ2'),
            farmingPoolStakeTknAccount: new PublicKey('FQo71LhxWHmjNiLoV19RDcoFS4gTMnHGRe6NixjgjsAp'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('7Q7gufPTfvUkTuVTFsEZAnL1B8gAFzsUgVD2bSYimG51'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('DVAPvhBkHEWhE4w9T84KF5rySu7cyQiFHLfsKDMvcT7m'),
        }
    },

    'BASIS': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.BASIS.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("CweY4HW2y4mQQmduqQNBPRHLNcsLmNV3aUNSE4EHumhe"),

        lendingPoolInfoAccount: new PublicKey('499SnZR7dFzLU6BF9v9obfSCsmgui3FBtYtFDakD89zQ'),
        lendingPoolTknAccount: new PublicKey('E85Eyi4NmBp2Der1ntoNNx3AH5FHmjp4gGoUPW7qYVJ8'),
        lendingPoolShareMint: new PublicKey('9s2iRZBzSNCNTUtuzSRHcv3q4Q9SaFFhSFZVnFXGtHUp'),
        lendingPoolShareAccount: new PublicKey('5phQAZCwdfbYqj1tsv4xYWREpLZuxhqnMaZ126RAfVNb'),
        lendingPoolCreditMint: new PublicKey('AVRoCxDDfx525L1XJJ5JbKrPPbuHs1JL6Z17vWS3HpKc'),
        lendingPoolCreditAccount: new PublicKey('FeMzBdYfGJtqeRAadiC4fStY13cjxe6GutTyFCFsP1vL'),
        lendingPoolFeeAccount: new PublicKey('CtdMN3hrU9yq2GJpojbU1oQZbMXJyuVZYMfNkAPbgaZN'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('GD2syrTphVNFhgWPfX52JxsqTLFXpFKHsFuHFuyH6SCa'),
            farmingPoolAuthority: new PublicKey('9SMowoWcvciMBVTD4K3fDhMqjTQ5CRHCpGpT15R6sjBx'),
            farmingPoolStakeTknMint: new PublicKey('9s2iRZBzSNCNTUtuzSRHcv3q4Q9SaFFhSFZVnFXGtHUp'),
            farmingPoolStakeTknAccount: new PublicKey('9T6pP9xrEa3sNoaiDv2rRoViKWehnYv11Mpy3KAPqp25'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('3ons5X9YkRgccyEX7CVC9FSCeTzkkKrDouyAejZNeXfN'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('AAYSvVfYigFoSZHYgrZ78sviYsSpLGuP9gzuTkMQCQNq'),
        }
    },

    'UST': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.UST.mint,
        interestModel: interestModelCase2,
        lookupTableAddress:  new PublicKey("HbSUXs2y1nMm1rpWfxeD25ZsfXEk19PuvWTZhdzvwUvo"),

        lendingPoolInfoAccount: new PublicKey('G1PYcFc56DQHDjSyt8zRKcnxbBrKJq4Vehurzrt2KUzs'),
        lendingPoolTknAccount: new PublicKey('DKYpvhtPyU9yWkGZx5VM4fA1isLwpcmQ8ttqhPJgMMrJ'),
        lendingPoolShareMint: new PublicKey('FPnFwW1ASFLBReVz1EPWVGkbrsnrekVkEcQnrBRkvDXS'),
        lendingPoolShareAccount: new PublicKey('MeLTPseZyHm2aWSk9Gda9d6xWM8DS5QySFKBS3Vyzsv'),
        lendingPoolCreditMint: new PublicKey('AbPJaMzRetUebzRV3mtoXtyPDVwEBEHif3EibVKhfcTs'),
        lendingPoolCreditAccount: new PublicKey('mYi2FARcy26GxkDuTneTybM75izMAR7swioxUMvyPRa'),
        lendingPoolFeeAccount: new PublicKey('5wTjKzJyEJHbjw4fsZM51fKBDwiq5JSA3bSzzRE2PXob'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('6Y5Y3mc6byPdXLhb8twQM2Ei4L3YfceJpLFzFDNsZSBi'),
            farmingPoolAuthority: new PublicKey('9a3QEmKhwyzqPY3SCXSmoTBfEgyzb4w96VP44XDM9p3V'),
            farmingPoolStakeTknMint: new PublicKey('FPnFwW1ASFLBReVz1EPWVGkbrsnrekVkEcQnrBRkvDXS'),
            farmingPoolStakeTknAccount: new PublicKey('9fZhscUjooAhovtGDn7xvtYabs35aqj8uN1H45ERZiQa'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('BTgLyeGfjYzA3joa62k78wvsEE3a8eFHhzVoLMTDVPhM'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('CqsbNDh1im9bJx8rFUCdi72o26sZFNrbvHET3i7mFkzj'),
        }
    },

    'GST': {
            programId : lendingPoolProgramId,
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

            tknMint: tokens.GST.mint,
            interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("GBAgJPNhEmt3JwubXVgd66zoJZP8XBGD7FwsYzo8WRkh"),

            lendingPoolInfoAccount: new PublicKey('93zxnt1gPepvUjWYPP32uANnhAK6NNphGD6A2yQFhk4s'),
            lendingPoolTknAccount: new PublicKey('4Y7VyaAWEDaQSkeYXbXRf1d82ZPViVRZ7Dt4fjHKgotL'),
            lendingPoolShareMint: new PublicKey('4GDuSZwHUQvL6zga2UNdjgXSqXjcWaUYc4S36N9q4567'),
            lendingPoolShareAccount: new PublicKey('GjmnPLwAAA5aZCfN5sCwcbartonu8iyVMPqSnfkyvtC9'),
            lendingPoolCreditMint: new PublicKey('8Nq8YV7BYoe3dqdTX996TRDB2iYryAHbzZTXntt2A3Uo'),
            lendingPoolCreditAccount: new PublicKey('8dzJgZxp7rBEbKhvFYXTMXKLmkqscn9UXwzcGA14fEgN'),
            lendingPoolFeeAccount: new PublicKey('ERyCAJh59hn8187Kn6wiKpeXdnGw4hptrbn55vh9YJQ1'),

            rewardsPool: {
            farmingPoolAccount: new PublicKey('FeWUu6GVAvbpvcYqxymDPLsE4bWjtfLsJNg9FFVjQHwb'),
                farmingPoolAuthority: new PublicKey('AqTdNkV6ZcpgN3QyBH1cSQZx8DHm6AvoHWusrGT9cPiw'),
                farmingPoolStakeTknMint: new PublicKey('4GDuSZwHUQvL6zga2UNdjgXSqXjcWaUYc4S36N9q4567'),
                farmingPoolStakeTknAccount: new PublicKey('A2d7G4aNKt4emJHdKpz7fb1C8GCw6gZxA5d9pUF1hxEW'),
                farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
                farmingPoolRewardsTknAccount: new PublicKey('BVRKUs86o7b1tiyGWByag6DtpejxZdvz9BkBRkZv1auh'),
                farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
                farmingPoolRewardsTknAccountB: new PublicKey('E81P1ip8ynf8q9Y3d365fghEhNgHK5yPcYkiuTF7WjVs'),
        },
    },
    'GMT': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.GMT.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("3KzviRz2snQevukX9FWt5n72XQFX48czkWJPsAiGoJZz"),

        lendingPoolInfoAccount: new PublicKey('9b5QWW2SqjmhRxtYTHXj6LFkmUkahrLAMQer3rEurd1k'),
        lendingPoolTknAccount: new PublicKey('7ZosDG7JWwXFnzhQ2aQ1ghCSQ9mrQzvH3ZhduhRPHgJB'),
        lendingPoolShareMint: new PublicKey('9R6toP3xTFBWoqwBY8bfjUj6Tyd5hyR192jY4NeMmkNg'),
        lendingPoolShareAccount: new PublicKey('BPPtMXgGkpo5HuDbiFyQWiA5r4BfxRWfwUA8XoKPixb7'),
        lendingPoolCreditMint: new PublicKey('B1yWMWp7nvSV2upJxFUxpUkDiZAVD2MabnRgaBtR14Dm'),
        lendingPoolCreditAccount: new PublicKey('6NvFHm9p6oSK8DJ9jurTMkC8KBo2hCk8UQm19Nub7R6X'),
        lendingPoolFeeAccount: new PublicKey('ejLn4fFkVS29aYksC87TQYwcu8wy1tvc2AySpfHGabQ'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('BvZ4vUfiXRvxcKV6ZiPcZdWJRtRpovMV19nZ1S8WV7JU'),
            farmingPoolAuthority: new PublicKey('5G8BjukrA9tvU3dsafR95wywdj8vq44pg8TcMSbN1r2z'),
            farmingPoolStakeTknMint: new PublicKey('9R6toP3xTFBWoqwBY8bfjUj6Tyd5hyR192jY4NeMmkNg'),
            farmingPoolStakeTknAccount: new PublicKey('DPXP9bkB5A183bfbpHrCYdXpRSEFehWqF4PhpG1P5NtJ'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('2Bo8GWQoysSTswVPxsMdCFC8fmVP84D7CJPuqfSiKPJd'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('29TsFVuj7ZdFwLUvfBeBt7Wcw5jBGguGi8LGRau9TRaz'),
        },
    },
    'ZBC': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.ZBC.mint,
        interestModel: interestModelCase3,
        lookupTableAddress:  new PublicKey("FNVsWfdmEcAjdxUZtRC9165RUt8zQh3k3mANCQL4sRAu"),

        lendingPoolInfoAccount: new PublicKey('6uPerEUyomCC5qn4z9xF3fbVa7SCytcKoCVannPDez5R'),
        lendingPoolTknAccount: new PublicKey('7quTFi1N9EZfz7jUx7ui9wx9rk1rb3F1Enjbh8Me2tSs'),
        lendingPoolShareMint: new PublicKey('HUry6RSbDasMfU7LXZ5QR42YajkbMuLBQkyV742xgFKx'),
        lendingPoolShareAccount: new PublicKey('BHuVdzrDTssFdWTqt15fsdJzJuHESQrMhSnc3jsJ8X2Y'),
        lendingPoolCreditMint: new PublicKey('ADWAgFjannL985LDKQsQ9B833BFDMj4q8qQappe2F3X9'),
        lendingPoolCreditAccount: new PublicKey('5xqkszmojpTFy3wGQTXFB7XoLyWXxw7ymmHN9iNYVdUK'),
        lendingPoolFeeAccount: new PublicKey('qt8KMibr5UcB1WZGVdgyFNGvmzEtp3faUqfcKDytLzq'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('FPKSH61ciN4YetqKvW7KMWVc1icKDqtPogQR1tQqZrWF'),
            farmingPoolAuthority: new PublicKey('4v2FpU7sTv8BoQdu9LXY65EK4AMHheuDyVDp3viuzh5f'),
            farmingPoolStakeTknMint: new PublicKey('HUry6RSbDasMfU7LXZ5QR42YajkbMuLBQkyV742xgFKx'),
            farmingPoolStakeTknAccount: new PublicKey('4TMJwumst5n67zuFFj12zBVe1U4WX1iApjni6FMNPrwP'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('33qA8PTrZuzMe1ixw1ABeSCDykGEcaBRcDbYcySjY66E'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('8CHYivAkcJo8V56bcVaBmKQjLAydtLc9aXiyiyWCfk1U'),
        },
    },

    'WIF': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.WIF.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('94R9kreGNYLYiALEJVsosXyrAKAsWzY8hu88pPvKEwrJ'),
        lendingPoolTknAccount: new PublicKey('CaBKNCjweSp1aa1TULQUdgn5vT7FtjbgJULCgH7cU53s'),
        lendingPoolShareMint: new PublicKey('ADYL5nKBAoTWR32GqgFsdJsKg21zEWp8UKNn5mBM8fgu'),
        lendingPoolShareAccount: new PublicKey('8pYosNLWaHCkGBVDDd4tPvLB3vxQ3997SZLBQNbNJgVn'),
        lendingPoolCreditMint: new PublicKey('7rA6NpH7vLywUBADcCLTeoFgfxQwKBthkkYnzFBZESv'),
        lendingPoolCreditAccount: new PublicKey('28pio9eBkq3j449w2MQVqeYsxqcLgYcXPiCCbsAcQhk1'),
        lendingPoolFeeAccount: new PublicKey('EkyDCdfVUjWNKhFK21TuQ3DVkjV5wpG1kdHqZwmnKe37'),
    },

    'SILLY': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.SILLY.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('Eh2rnZQpHkmD8PsrxGMVdeG9hM6yDQf7PZpi6Jw8dnmh'),
        lendingPoolTknAccount: new PublicKey('FwbPAX89jTLUz6gW1W287oaSN81zCAbpFLmX2LLMCzNa'),
        lendingPoolShareMint: new PublicKey('4CQoHLh4Fhy1uCY9CzK2WwARRfYcu5fpqCSqDADrH23V'),
        lendingPoolShareAccount: new PublicKey('H1DcCAgWezFejZdeYEhmL6BxWFrHcrRC7AfUamRGdfM4'),
        lendingPoolCreditMint: new PublicKey('3jsnPzLiyhBnmy9cYQnxDGNY5Tsuw3mvETeQQrtPcFNy'),
        lendingPoolCreditAccount: new PublicKey('DycyyB3WtsnCeDX7VjHpwBRcdFBn9zqoU4VU3Eee2oxu'),
        lendingPoolFeeAccount: new PublicKey('5QKFYxEKYQWuVq4iijFnAtUwodY89n4LwXJzAyYAAvq3'),
        rewardsPool: {
            farmingPoolAccount: new PublicKey('tud4Eg1KLoq7tSVuKeFDZo1k3BFkEDQcsPg3SGhZKtu'),
            farmingPoolAuthority: new PublicKey('B4sMCNsWSdqLgZXS2UEGoAVw2Q6DSJNcWanM65CZjk7J'),
            farmingPoolStakeTknMint: new PublicKey('4CQoHLh4Fhy1uCY9CzK2WwARRfYcu5fpqCSqDADrH23V'),
            farmingPoolStakeTknAccount: new PublicKey('FNTnCTMVVLJvb66jtq8pug729F4NNZ11C6hzXEB1Aif4'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('Hr1gZhUtBVQLir5heioYnHCP3BAwNwqiUYRXWy593Cyn'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('68mPvWRx3gk9sGi9H8gBoAXCCfS8RK1evkeViCEmJicG'),
        }
    },

    'MYRO': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.MYRO.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('7yJe9uufFFiJr8sEtsEU1Taeg2EGf2LB4PaQqiP7iDyk'),
        lendingPoolTknAccount: new PublicKey('5c4Be9Xt7t8hq1uKAd7C5vmQoXfJz3CcrUZtAUbANzRG'),
        lendingPoolShareMint: new PublicKey('832pHXCVV21Hq6P7J2VZR8GRHCRh2dgSZ21FPCR49i9E'),
        lendingPoolShareAccount: new PublicKey('DZCsMnEpGzLvQMQR2DLf8HAdveHCqKS3h4hf1KgMtDi8'),
        lendingPoolCreditMint: new PublicKey('5QLMAjGQQ4MyQbht2GjEL3r1yM1dc9FPu8ghXki8A4zX'),
        lendingPoolCreditAccount: new PublicKey('3mtoa2e3RqVAg8TTMPovYsHoAGD6Uw8buvTM8XZcxDGK'),
        lendingPoolFeeAccount: new PublicKey('6N8HSWJPTB5XGEeJ9RZQzFUVfLqZaaaHjDhqdDYJps72'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('H6pxbaHxe8eu8Y1QEQXyQMwHygoM2yRsziqmCCBPmYAS'),
            farmingPoolAuthority: new PublicKey('DJ1oq8HEHB1ScMtEvPwNS8854HfiW7H5wYS6UFW2m1PZ'),
            farmingPoolStakeTknMint: new PublicKey('832pHXCVV21Hq6P7J2VZR8GRHCRh2dgSZ21FPCR49i9E'),
            farmingPoolStakeTknAccount: new PublicKey('Evf71Gstm582LNzaHDHCQSNxFFwqd5zHRv5HXQiqB3eG'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('GjkDHdn25R6PSnePWsosMUD7sq33JcjCmFnDv5dbQzDz'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('83bvERfhmXt6SZEKQznZnLZUN9PW4XSgGcBfd16ynJQu'),
        }
    },

    'HXD': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.HXD.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('GAcPTdpy4dVB4twp7yhtmjvpGNizLrj4hg4q8b73VRSH'),
        lendingPoolTknAccount: new PublicKey('6Y4kNJ8zvdY7RVcab3bWVFwcJFqkLzhQen5LRdjTvsoV'),
        lendingPoolShareMint: new PublicKey('F1nYpzL1XNa7JUXP4difCAu2CFdv3CwrX6V9Mg2Yee5s'),
        lendingPoolShareAccount: new PublicKey('CkcPZSG1aEyopjeWDu9fzAwG9TGdvDq4tu8uFDztgj4u'),
        lendingPoolCreditMint: new PublicKey('Eg52bec4ZNxZRkVRek1JhxKXHSwYkob8au7CNG8frsU7'),
        lendingPoolCreditAccount: new PublicKey('J39c2BcJpFLAw9siha8xcrWofYn4tjBqMj4H3JfdkcnY'),
        lendingPoolFeeAccount: new PublicKey('DJKmQijsE34uCZtAPRBhSohs4iY8mJJrFsXCx22FB3D1'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('3cMksTsWCnNLHPHqTVXCtN3t9wAkJpX2ggo7CvVzSy8y'),
            farmingPoolAuthority: new PublicKey('5TG9fJNRGdbsW7JcVJrigBzPKzkoizvkxEUG9CPCbDGn'),
            farmingPoolStakeTknMint: new PublicKey('F1nYpzL1XNa7JUXP4difCAu2CFdv3CwrX6V9Mg2Yee5s'),
            farmingPoolStakeTknAccount: new PublicKey('GNr8S2yimqnH8mEDUfW9e3KpNdEKBcB88GSwGufi1a4t'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('CYZqVzH1sGyj8bj1SG1i8Czo4xxsSLGJZPuBLffXUyyb'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('GnqEHNVzJFTtLPrzREgAZKHxJ1BbQYvdPBisfsYeTUPT'),
        }
    },

    'MPLX': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.MPLX.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('6vvMsN8V4tRzWFiTCQRJnJt5jGmuUK8kLAVH1vqbJGtC'),
        lendingPoolTknAccount: new PublicKey('AwzcCD4tfT2o1iNWKEpP6rxmt3xua7UJiknpZ3HrV7gw'),
        lendingPoolShareMint: new PublicKey('BcVXND15YnFvb2BA1m7Sf4voAJBWinYyJCavrBoqXvEg'),
        lendingPoolShareAccount: new PublicKey('68YifoSNPPYPKf7b4Q69kXM4vNxgMB5r1EQtGZTJGLJJ'),
        lendingPoolCreditMint: new PublicKey('CgpBjP3U2P81jmh1G4mFzDMBTY2diD7fSPiig3Acsv1c'),
        lendingPoolCreditAccount: new PublicKey('48frpoMtP1JWf6vrg86r156sJZcHDxCm9tkDMo1YsQwh'),
        lendingPoolFeeAccount: new PublicKey('2mc4h4LjXzkj2ft9PPtsRUUgv8W4wY7R9XZnvVV25h4y'),
        
        rewardsPool: {
            farmingPoolAccount: new PublicKey('G6YCZPexbDAceP12htWoT9DqRJrxhX8WVdmivZ64n6e6'),
            farmingPoolAuthority: new PublicKey('6BAJr9nDfMs74YUJgLhgXzjBLkgW49sPG7RsDBp6aQ45'),
            farmingPoolStakeTknMint: new PublicKey('BcVXND15YnFvb2BA1m7Sf4voAJBWinYyJCavrBoqXvEg'),
            farmingPoolStakeTknAccount: new PublicKey('4NhSTfyRTF458GUp2r1rjo5zJZUMY7De3EHceNSq48wM'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('6r22JQ8n88NCnJq9o4Fk6H7Nqu7jcKJCcdQBFfoD7yRY'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('F43B25CVQMR9BXhAzwGSyF3FBAvKJyAjYiUKHs27WV2V'),
        }
    },

    'NOS': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.NOS.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('3YvrDRexMNrXK2QhQsbCiQgEdWk9oXrDjVSsCYUz1uzp'),
        lendingPoolTknAccount: new PublicKey('8M5sss7bke9oTWpykd3r7NkBbMiYyzSR8teeBmdvB39X'),
        lendingPoolShareMint: new PublicKey('AVbaqrfjFsMDnHhWaNZPRnWcXe8sbm7XfotqDMGhXgC3'),
        lendingPoolShareAccount: new PublicKey('8EUgXjAC3Vnmi5bzrd5uuMiCt8pML2NaPtzauU9LeYFW'),
        lendingPoolCreditMint: new PublicKey('2zkmt3uWnwNnV471xt47Y4SSGMvAgPKmuj9GdEoBCEws'),
        lendingPoolCreditAccount: new PublicKey('9bCNXV4JnZ8zPHMKkTyundmpegqPQNTg8CNpxB5oN25L'),
        lendingPoolFeeAccount: new PublicKey('CccXE7qBFP9s3eYBzzw1gaM4L2hyAARf7ajo2DKYn698'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('J5u8KugYFjrjB5ogfZNwWqfqpyp3MWkDZCmGcAkRonT5'),
            farmingPoolAuthority: new PublicKey('9Cu3biyrvZHnhQREgSACCxQb8ooQ8emH9y3iGmsDBAHP'),
            farmingPoolStakeTknMint: new PublicKey('AVbaqrfjFsMDnHhWaNZPRnWcXe8sbm7XfotqDMGhXgC3'),
            farmingPoolStakeTknAccount: new PublicKey('6hAQyJLXDQTQWEAaFCjn7ykkdnQ6Fmj5QdWNybjdUife'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('5fqMG19mgbrnYm7utkYJvZzUrKdjercKnemLbU616BAP'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('Aaz784ysCYwhZif1BMQB8h8CsE9gMNX6Eo6AkxQUtwMH'),
        }
    },

    'HNT': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.HNT.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('CjrNNRxE89M2NZA7JYqk7DfpmNXhPg8ErQATrXr398xZ'),
        lendingPoolTknAccount: new PublicKey('WzjQCRccZLfJiQDQLabMzh2udwvPgtpJcGAXfUDmcL2'),
        lendingPoolShareMint: new PublicKey('748Tb7EFWLyx51o8jKVgJx1R2cUT1w82mNqc5HWKfQ9P'),
        lendingPoolShareAccount: new PublicKey('DaKVddhELn142fc6Z5oDFXaG76fyPftNZ61TLpbE13T8'),
        lendingPoolCreditMint: new PublicKey('9wHeBMnSFgtV3S55yHjw3CJoLAFvYZGTq4ZyFF1LPjMi'),
        lendingPoolCreditAccount: new PublicKey('A6CGhvzQTn6S4rsxUVy7LgjC3QGf9HtxzxVPHWX2VoHM'),
        lendingPoolFeeAccount: new PublicKey('HfiT747ktTFEBH6JnMsSnfMMGjzbY5TQPqSNUv8TUNmP'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('5KMYZ39VX5E2cV4WHTAh4TfRFPH6W2JJAXnrQaZ5vaMP'),
            farmingPoolAuthority: new PublicKey('8QmX7L8RCCmYuf6wwWxTWL2X9N3an12pKgSuFkMJZUC9'),
            farmingPoolStakeTknMint: new PublicKey('748Tb7EFWLyx51o8jKVgJx1R2cUT1w82mNqc5HWKfQ9P'),
            farmingPoolStakeTknAccount: new PublicKey('5rmJiJK87sGdDZbKa7hybeFBx5pSsYABnEZcEyQb8caX'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('ACVeKxEQsMPbETsyzAcvrCvi2SmEdjhpBXJ7Vt7XH7Wo'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('67K1NdwqkC7HXLRVQFMBCNa4u1Y35gCvJQUtbkc3kKWG'),
        }
    },

    'POPCAT': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.POPCAT.mint,
        interestModel: interestModelCase1,
        lookupTableAddress:  new PublicKey("EaVZqj9ogxLe1j5w5XGeptCDjcSPsMtjLh4KEVpLcvt6"),

        lendingPoolInfoAccount: new PublicKey('WKfp5Au11eBJ96BEPg5KCfdJkrhaxUPPEBaWQoLR2jV'),
        lendingPoolTknAccount: new PublicKey('HYj2BHJ3xxLUAwDcu9KY4DuEKT85TeqdQyBKoEMz51aH'),
        lendingPoolShareMint: new PublicKey('45RnnhbkqmeGgX4rhk5z7gP7sVce6RJwoeDGV9aDo21K'),
        lendingPoolShareAccount: new PublicKey('DqvhZGVQQuf2BmXobVZ7kACQ4G9gbhykKQrxyRHPLWot'),
        lendingPoolCreditMint: new PublicKey('9pcjKiFWmBe7CujChYCz4qgRKCJt6DajuWqqs9pW7gE6'),
        lendingPoolCreditAccount: new PublicKey('D5T6tGaUP8vmWuh84ds29rGM6fd5ShS7LEcanLB5FSg5'),
        lendingPoolFeeAccount: new PublicKey('3qdvuh2tjztU7yN9tBiQhwc4xV7YryECvyvtEv2rtWZo'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('6XtQqAAaK27EwnrQqChnnwfWAc2tTrTv4BYMkvjK1Diy'),
            farmingPoolAuthority: new PublicKey('143LGzBVXsefXy6KJtTNk49EpX4zPuHhTiqp4542teH5'),
            farmingPoolStakeTknMint: new PublicKey('45RnnhbkqmeGgX4rhk5z7gP7sVce6RJwoeDGV9aDo21K'),
            farmingPoolStakeTknAccount: new PublicKey('FtCdZeLgGgfWmc94qApMdjv4Ui1A31vaabm9SwViCT4'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('5LeJoM97h9MAapkXajxFyRFBtcRH6GczUVhY5uTJg7TG'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('6VfeE3ccoCt2YdTUX7hA5ChoQrU9Vt3L2Wgtt4SyaYro'),
        }
    },

    'SMOG': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.SMOG.mint,
        interestModel: interestModelCase1,
        lookupTableAddress: new PublicKey('G5bR3T4Ph8r2FZL1UZnGpXAvorAeDff13hYW2vdeD7jV'),

        lendingPoolInfoAccount: new PublicKey('AjuJ4vb2xThbTzXVCFyjJaCv6hGfwduewAyyia4A1zZd'),
        lendingPoolTknAccount: new PublicKey('2GUKaoHorirgdPxEitudfa4t92nKqyaxXfXiqQP92ZYp'),
        lendingPoolShareMint: new PublicKey('Gc6tZwpoZTLzAyRoNJNqW3nUVjWFKMVEuxj7FzewG9cB'),
        lendingPoolShareAccount: new PublicKey('3hbhKHmHH22SeQiqcf7Bte8eKdFCN96FzP2PGzaEvCEK'),
        lendingPoolCreditMint: new PublicKey('9iCpT5jCvDedmG9nrbxoksdqjVLxgrfMZMBbRCsGHGT9'),
        lendingPoolCreditAccount: new PublicKey('DY5bEdnqYqeykrRpjtWEFpENnQBAUG7kP8PP2J1BX74d'),
        lendingPoolFeeAccount: new PublicKey('8K8VCiLLFUMtWorzauAypE1FLFqzC8yc7Cobd5NBgqtg'),
        
        rewardsPool: {
            farmingPoolAccount: new PublicKey('FjgnV77fmXZDa4jqKQi1caJaaPzr2SnBU6tqFZErCSch'),
            farmingPoolAuthority: new PublicKey('CNBGmQJxbcPFJENKzuAoFHQC3qpR4rmPfwhLWSC2y9p8'),
            farmingPoolStakeTknMint: new PublicKey('Gc6tZwpoZTLzAyRoNJNqW3nUVjWFKMVEuxj7FzewG9cB'),
            farmingPoolStakeTknAccount: new PublicKey('5PaJEiGkELPK7fi24NTF5Yt8xcfJFuqieATUXinLpHBA'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('J95ULXNxRSSuBA8WqomWCw2GUsXKixXyGDA4CNDKZeGi'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('9qZQ25p37xFUEJDAYrsRT7sRsXk7mx1Pr5TE75jJYmrL'),
        },
    },


    'BOME': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.BOME.mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('6qU4WsKspEHZQ46mCqvCABK9hfgvT6KXSzUXXW9y8YQG'),
        lendingPoolInfoAccount: new PublicKey('EL4kcN6n1EgvaqqUV5rfz2ZVWmbgzftuTMmP1hsDp7ZQ'),
        lendingPoolTknAccount: new PublicKey('2a2pgtv4sL1k7tB6ft5MqEPzRULJZ1krUviGSoEWACBq'),
        lendingPoolShareMint: new PublicKey('4U3WDMagepPySviVAcmA2BmkcYWqhzPGLNHFuGMs7ZrY'),
        lendingPoolShareAccount: new PublicKey('Aj1kUAb6jZr2AHkqQ2L4y9rgMy1DDEEcLeghYuoiZPFY'),
        lendingPoolCreditMint: new PublicKey('HKvApA6cM6S6LHkoHPq8Dc2DdnjHWgWxJNSAZT4dHhUC'),
        lendingPoolCreditAccount: new PublicKey('5sACmB5Ga4BawDkcQF5tiAx6CQaEs5U5cNCTAFWEMhWA'),
        lendingPoolFeeAccount: new PublicKey('EjQhAkBbEWU9th9kuicW4khcEyMVhfRcqJwNmB5WxJ1Z'),
               
        rewardsPool: {
            farmingPoolAccount: new PublicKey('Ff3UpcuT9nRLGTGUSwK3MJp1dEtyh7TRNFm8vyJsEsMR'),
            farmingPoolAuthority: new PublicKey('6Qdp3yXZKCU5mkQ74MtGY8QxhfSHAwfRPXVQZ4cHSX6w'),
            farmingPoolStakeTknMint: new PublicKey('4U3WDMagepPySviVAcmA2BmkcYWqhzPGLNHFuGMs7ZrY'),
            farmingPoolStakeTknAccount: new PublicKey('AJh5FNeg7KCTMrVnEwp77FA759hAjQA8UwefUYrfir1c'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('BX8q8Y3e6P9S93ToUjbzRWtduYV5bvViujYvYFcXg913'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('BkAWkgCT5fn5LnEN4UCebJaULsF8HT8vVorYXR7uEoAG'),
        }            
    },

    'PONKE': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.PONKE.mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('8LL4ydmMVdN3XTLgnmZhs5ZgvJjRkDJECVfaSthpXBeD'),
        lendingPoolInfoAccount: new PublicKey('Br3q7MWfRANY1eRc3FVJaJJ5Y962zMHecHbgudXBKTtm'),
        lendingPoolTknAccount: new PublicKey('Bq81mqp3uvfSFiGwenLS4WeHrCw6xMU8bN6EW9gxgmdR'),
        lendingPoolShareMint: new PublicKey('3bYSDtyW4hMWGK6NfYV9YZMJvMF9y15LEWT2HLpRHSEC'),
        lendingPoolShareAccount: new PublicKey('2DLH2gd2e3SVmZkGxG5PKPjnpY7cViBs5XBosctGGnkJ'),
        lendingPoolCreditMint: new PublicKey('A946kftbUtkMjnxJfgvNTaR5qs1Vs3saCAMBQSdN1X4w'),
        lendingPoolCreditAccount: new PublicKey('CW3kd2YYkApVNHcHbe6MpuMCs7PG4k1WbqJ2KrG5E4eC'),
        lendingPoolFeeAccount: new PublicKey('B6WoDb6bwXPAn9vPcojAkp7HX8XkvhSNktKvsZkrjAPP'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('PvpJFyBN8rhyaviPxFUATAsFV2aaHAa7HvCpeuwfoUj'),
            farmingPoolAuthority: new PublicKey('C2oKvYm25WFZbuNTk96pyapa8nY3sFy3wKCdyW1JqpnS'),
            farmingPoolStakeTknMint: new PublicKey('3bYSDtyW4hMWGK6NfYV9YZMJvMF9y15LEWT2HLpRHSEC'),
            farmingPoolStakeTknAccount: new PublicKey('9ArsuCP52THeYviVuq9xmTzoWNQRF3gZM96uxwjNox81'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('C4JUuQ8SP1Av9p3pKxQY4LNEKaKpo3Mi4AuCp6SeZ7Jn'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('7oCn1v9Wc6SeN6a2YKBSdqd3pMTDMZvqLo762ZgRGxWq'),
        }
    },


    'SLERF': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.SLERF.mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('FzQVYhNHTMQbLNPLbD6HQg6ar9RMuDfsPvoaJxpbXdPP'),
        lendingPoolInfoAccount: new PublicKey('G2FUDq9i9rB7MFDMJL7sMc58J9ayEsGSCHV2pj5C1HQB'),
        lendingPoolTknAccount: new PublicKey('D4mb1Z1YyoQHdaGjvip9SiRuEeRUJ72oFSWP7EEw8ERE'),
        lendingPoolShareMint: new PublicKey('9HeYsKLzgddQHmrjvYEejfLqynKLptPKUcfuz5k71WzQ'),
        lendingPoolShareAccount: new PublicKey('5VNjERwsH2L8qtnFiLJyJnuVZwEkJ5s6nNF3BzmDwFMm'),
        lendingPoolCreditMint: new PublicKey('FLzaXFxjuQjv8mZSGAPA5ujYq9udtipGoPmawjCXPDtB'),
        lendingPoolCreditAccount: new PublicKey('G7198jH4gD6mP44asqmmc2vaMbu8C34umspKFB6hQRF'),
        lendingPoolFeeAccount: new PublicKey('GqnW7ao2ZUnkJYXocPgenEmjnHDr6WSnGrVbQ1G4YGDH'),
        
        rewardsPool: {
            farmingPoolAccount: new PublicKey('B2h83Ekc31dNtwgoM9XBkrA4WPxRuGoRxtpXwgxLvSSG'),
            farmingPoolAuthority: new PublicKey('AYempiqDhqRYLuMPrHs6oenJfyANwuogetc41caJv9qq'),
            farmingPoolStakeTknMint: new PublicKey('9HeYsKLzgddQHmrjvYEejfLqynKLptPKUcfuz5k71WzQ'),
            farmingPoolStakeTknAccount: new PublicKey('EXhA6aWjJkiXHrHJQ4nceRY94cpJFAnHmEg82EGVk8tn'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('7LfZvtvGSo6qeGvZxqPAyB5yQ87eUrEeSi9vZmF8agWP'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('9WrMB5bXKRHGkRpP8vNMqMtYB1Z5kuHHKwSt6Js9ywgK'),
        }
    },

    '$NAP': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens['$NAP'].mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('Hy9ogsMSe442a2uzKQRyoCxMHryjJyZVkTirG7WMCTdn'),
        lendingPoolInfoAccount: new PublicKey('6zN1gLYEbbXMreWHyLmum9ZBFECyCFdS2976PWrFoL8o'),
        lendingPoolTknAccount: new PublicKey('63QiUHkTRQWMw7b8YkQUHVi1hfsJ6L6kL7RQXBF6PNyi'),
        lendingPoolShareMint: new PublicKey('AYmLWdEVPAKjpY5na147inwW51D4vBzGpaDcDsiRu3zQ'),
        lendingPoolShareAccount: new PublicKey('HijKM1PUCr7Qqb2w3eY2HdfzAvNyYibnxnFAqoQY6uf2'),
        lendingPoolCreditMint: new PublicKey('8zrCqKyzZMLLzdDFc19shvosAJceJsMcoJohMMkaKZ45'),
        lendingPoolCreditAccount: new PublicKey('HcyX939FLpV9DQwDzUJmLqzhVM3qQmmVDUHNT1JCXBYe'),
        lendingPoolFeeAccount: new PublicKey('E9DWHcFV3uJEgBkEBogk2MiGjWG2sgtQrdsgET5k9YZf'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('8h4uJqpdQHGY9d7R3zS5nr3bJft3jmfd23vWSXGxzcQj'),
            farmingPoolAuthority: new PublicKey('HGiAEEzdw5CG9ithX9b9iYe6TjHAYuBLDX6jYwcdndPr'),
            farmingPoolStakeTknMint: new PublicKey('AYmLWdEVPAKjpY5na147inwW51D4vBzGpaDcDsiRu3zQ'),
            farmingPoolStakeTknAccount: new PublicKey('9oDYdrCwj5UQZN3UxGjEXTBFdXVgtVdu72TdiPWFe9UJ'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('5yruEQifUaSo5CngzcRGwjP5uZJrzS1q6H3GhEjhNSxU'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('9bBi1p1ZJN4UK42xPSCSaZUPRGMiNRkkJrtSJtsTwdhf'),
        }
    },

    'LIKE-1': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens['LIKE-1'].mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('3JhnEiG14WX4fbhSphPw1pC4356cx81aSsSYdzSzE78p'),
        lendingPoolInfoAccount: new PublicKey('5igCybNtC7eSwgVwrEkerWXbdhR3B1tDB9FcXiiGhWzQ'),
        lendingPoolTknAccount: new PublicKey('7LXe6hqdkibyYLxFKtmR5fwS642LGDKSnsaaFDi4hmn9'),
        lendingPoolShareMint: new PublicKey('6dJCjVk4HYodMdhhAJU4YoMcEsvNam9ekeLWn6pVsePD'),
        lendingPoolShareAccount: new PublicKey('1ZVwW4nFRvTh5NrCwubW555ao8wZFe9ZUnG9WqWnfPw'),
        lendingPoolCreditMint: new PublicKey('EpRKi6mArzkJJR7vM79Ws97UT3B9gC4eTRTowkiKbfuB'),
        lendingPoolCreditAccount: new PublicKey('7mdZ4KSdJFBiqMWKVAPsBwCJptMKNmJdhKT82F8re1gf'),
        lendingPoolFeeAccount: new PublicKey('HF2T4oSmuAfEfhDg3cNWK3KtouVhSEyGq7vnChCXVGgi'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('DwARrar7ADkLyh4SGJVrqEE1rqsML8ixDHvLniDGL2VF'),
            farmingPoolAuthority: new PublicKey('9L4Gm9V1wbE55vUhLKKcxi8YaN6bt7X7DvCVdY1YdRC3'),
            farmingPoolStakeTknMint: new PublicKey('6dJCjVk4HYodMdhhAJU4YoMcEsvNam9ekeLWn6pVsePD'),
            farmingPoolStakeTknAccount: new PublicKey('5spQKsKmYoiAAeZpxrwEFi4n9ZNk5MdMvE19dTpA8hC7'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('JBZ59NQj9yVnWEjYCdwgp21yJ3eLcvnHvURQgU48JpWK'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('2zgDw7bqxWQim5JyhRqKJ6zy9Hq8N7K2pj1oCbkJLsWC'),
        }
    },

    'SHROOM': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens['SHROOM'].mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('4oGSdya2rHuPo8DwrUTpH1kUvTgAVPKtKXZrUXfsrRgM'),
        lendingPoolInfoAccount: new PublicKey('AHSErYmAGxBCBGgXRRVqnVbXBDFzUryJ18mrrq8ZWq2V'),
        lendingPoolTknAccount: new PublicKey('5M2sRihQcNBtGaVwjX3d8ds4sEx7aZibuhKDbNi1hMDG'),
        lendingPoolShareMint: new PublicKey('9ZwAfiwneknM3bk6gFvw567BRswdCvoCavxjrp9hXh3Y'),
        lendingPoolShareAccount: new PublicKey('GgKCwi3XkZJ6sTEUW12VXCtuWK7V2iCQFGFbSCVBt6gP'),
        lendingPoolCreditMint: new PublicKey('7indCiq7kjxFnEveDguiT4mN7BvxRxhtbfKgMV4gyYGM'),
        lendingPoolCreditAccount: new PublicKey('5HvdrPR1mCrp9WYsVebVebmsVBgDWZzhX3aALfeTQ7K8'),
        lendingPoolFeeAccount: new PublicKey('hsLyuKoDFmAo9WiLn9eNxNPi73CjN8HaNk47SGjrRTZ'),
        
        rewardsPool: {
            farmingPoolAccount: new PublicKey('Gm8rzG8eyEMW9v7bDgRAvVRTtkWkdM3M5m5DQBeTLA99'),
            farmingPoolAuthority: new PublicKey('5PzMetkWaDxRdbAt7Leui7uavzeLExKYKHeUHi4yt2qU'),
            farmingPoolStakeTknMint: new PublicKey('9ZwAfiwneknM3bk6gFvw567BRswdCvoCavxjrp9hXh3Y'),
            farmingPoolStakeTknAccount: new PublicKey('F9czf8XUcLe3MPNDP8YYEDncwWHRDPeqGei7qbWuzS3p'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('FNdhjUKHDJrASVsF1vT5SDC2YV57x7DtfDs4X4wsSbbA'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('GuzpBbDzJkw3BhoG5X2ymVCPdsseQPZ25y8qaP1gM7VX'),
        }
    },

    'SMOLE': {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens['SMOLE'].mint,
        interestModel: interestModelCase1,

        lookupTableAddress: new PublicKey('89wSngkELqAV7kkWdHiQ9mobCVZq648dREecjVDAVz4B'),
        lendingPoolInfoAccount: new PublicKey('7PMHYow4NFAVi1FkRiCqpXfmHZMUngkSbGjf4uGwNeye'),
        lendingPoolTknAccount: new PublicKey('7pwz4VhgH8GDd8mYDtjKeeuoH1k8bPWML6pic6RVpK8R'),
        lendingPoolShareMint: new PublicKey('GCpZ57hRCoiFBLCUii19BTX7Uac7ikJbjTFQsrK6pdr7'),
        lendingPoolShareAccount: new PublicKey('H3sBrbaA3FTUv875ueTqZupiTn8mybqFxzYjFmGC6JjD'),
        lendingPoolCreditMint: new PublicKey('2qDSt9BxsXE5NwNgKm8zWvLH6qoQgsryTFwvyjxHHXLn'),
        lendingPoolCreditAccount: new PublicKey('8g1ZDpAqHTPUkS4azTK3pCQJwHJvQoevvh4njz6rycUg'),
        lendingPoolFeeAccount: new PublicKey('3q2NT2pDVhKJRUHBVmYmL1reWfXJPDT5iLYXbjDQHc8X'),

        rewardsPool: {
            farmingPoolAccount: new PublicKey('6WYweiZwxKk1E5yTBSnnFsXC7Dmoh7kT1nKKo7G3SM4X'),
            farmingPoolAuthority: new PublicKey('6iW5ti6oYAfYxmaZZ9Gs1izHLdeWhQTMVvV68irMjsSp'),
            farmingPoolStakeTknMint: new PublicKey('GCpZ57hRCoiFBLCUii19BTX7Uac7ikJbjTFQsrK6pdr7'),
            farmingPoolStakeTknAccount: new PublicKey('CdJeecwA2G5cqH4vHb1eq2CmCSFryDsBiLVdorRP5Syc'),
            farmingPoolRewardsTknMint: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccount: new PublicKey('baFKcNFLzsFKGJJy2FuUqNVmVefuixw7X3Nkeie7uS3'),
            farmingPoolRewardsTknMintB: new PublicKey('Hjibp1cn2bSk1dkTdpbxez3YAiBGTLjzc8xZ8LbCCUHS'),
            farmingPoolRewardsTknAccountB: new PublicKey('41UkSXs9FNPYR1YQCG3zL866HrM8Q5p7r72N8Q2yY6MJ'),
        }
    },

}