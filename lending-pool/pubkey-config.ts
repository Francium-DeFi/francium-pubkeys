import { PublicKey } from "@solana/web3.js"
import {tokens} from "../tokens";

export const lendingPoolProgramId: PublicKey = new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj")

export const LendingPoolConfig = {
    "USDC": {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc

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

        lendingPoolInfoAccount: new PublicKey("24dy3YvNeRThzCCiAm7k4S8ZZXnpsC8sqQLzfYmfTuue"),
        lendingPoolTknAccount: new PublicKey("5UKqFFd9GrYnCT3dqZFq9qJjaroQpqtbAFGpu1ZyAkNa"),
        lendingPoolFeeAccount: new PublicKey("5UKqFFd9GrYnCT3dqZFq9qJjaroQpqtbAFGpu1ZyAkNa"),
        lendingPoolShareMint: new PublicKey("5CCvvqeoWnRtxTgEbhRckKrGMc4rmiiD9VL9BpHVo3pq"),
        lendingPoolShareAccount: new PublicKey("AsczgPTpW8A6wQZTtu6Z5pVi4uvJsQf9d1MRXE7c7YrS"),
        lendingPoolCreditMint: new PublicKey("3sd5YPZUVkAYGdsDRgHZF4F6GN6kPDr63gY2FwZvgjMx"),
        lendingPoolCreditAccount: new PublicKey("7iNXmECbQYq2cCrwbyZ9aJbVJ8uCRzPjjj1KeYktu6ut"),
        rewardsPool:undefined
    },

    "COPE" : {
        programId : lendingPoolProgramId,
        marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
        marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
        marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),

        tknMint: tokens.copeToken.mint,

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
}