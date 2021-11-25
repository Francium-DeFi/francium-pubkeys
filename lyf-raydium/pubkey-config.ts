import { PublicKey } from "@solana/web3.js"
import {tokens} from "../tokens";

export const lyfRaydiumProgramId =new PublicKey("2nAAsYdXF3eTQzaeUQS3fr4o782dDg8L28mX39Wr5j8N")


export const USER_STAKE_INFO_ACCOUNT_LAYOUT = {}
export const USER_STAKE_INFO_ACCOUNT_LAYOUT_V4 = {}

const SERUM_PROGRAM_ID_V3= new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin")
const RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V2 = new PublicKey("RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr")
const RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V3 = new PublicKey("27haf8L6oxUeXrHrgEgsexjSY5hbVUWEmvv9Nyxg8vQv")
const RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4 = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8")
const RAYDIUM_STAKE_PROGRAM_ID = new PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q")
const RAYDIUM_STAKE_PROGRAM_ID_V4 = new PublicKey("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T")
const RAYDIUM_STAKE_PROGRAM_ID_V5 = new PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z")

export const lyfPubkeyConfig = {
    'RAY-USDC': {
        protocolVersion: 1,
        protocolSubVersion: 1,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        tknMint1: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        lpMint: new PublicKey("FbC6K13MzHvN42bXrtGaWsvZY9fxrackRSZcBGfjPc7m"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        strategyBorrowCreditMint0: new PublicKey('CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E'),
        strategyBorrowCreditMint1: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),

        strategyAccount: new PublicKey('9AcpsMj8q1rqkCtw9NP5hEumzgGnL31EMpXZT2BPUfng'),
        strategyAuthority: new PublicKey('4wQQvg2NmtuxyjCy8Uszj4Fny8sUwaUXy4DFQydJhiDo'),
        strategyFarmInfo: new PublicKey('9pDgptKTE1ZYXgh78NTdMAc9vhwzKJoCjC29CJqVhfBS'),
        strategyTknAccount0: new PublicKey('EqSCzhRmYjB64PxRq5bQ3Pq9VH5CuKHdLe8HKZCEHGVA'),
        strategyTknAccount1: new PublicKey('8iZd1bBcYZjPuJCkw74Yrc2JcS5RhAzLxfowN8aHse6z'),
        strategyLpAccount: new PublicKey('Es5E5VdmsQYD7g4U7anAsBbKMxwNNai82SDyWDGU5dn5'),
        strategRewardAccount: new PublicKey('8iZd1bBcYZjPuJCkw74Yrc2JcS5RhAzLxfowN8aHse6z'),
        strategRewardAccountB: new PublicKey('8iZd1bBcYZjPuJCkw74Yrc2JcS5RhAzLxfowN8aHse6z'),
        strategyBorrowCreditAccount0: new PublicKey('4fNpe228dA3UcfBrGoKwQkCnPHk4XzaButg8dJdmoBWw'),
        strategyBorrowCreditAccount1: new PublicKey('CeJaztNgyfwsNBs3oV895uL3ZnP4T86f66aSkVmmswWY'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
                strategyCreditAccounts: [
                    new PublicKey("GWnKzyvCJcQXvSwmj9msHUrCEv73XkbkF3csoHjwSDQL")
                ]
            },
            "1":{
                tknMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"), // ray
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID,
            stakePoolId: new PublicKey('CHYrUBX2RKX8iBg7gYTkccoGNBzP44LdaazMHCLcdEgS'),
            stakePoolAuthority: new PublicKey('5KQFnDd33J5NaMC9hQ64P5XzaaSz8Pt7NBCkZFYn1po'),
            stakePoolLpAccount: new PublicKey('BNnXLFGva3K8ACruAc1gaP49NCbLkyE6xWhGV4G2HLrs'),
            stakePoolRewardAccount: new PublicKey('DpRueBHHhrQNvrjZX7CwGitJDJ8eZc3AHcyFMG4LqCQR'),
            stakePoolRewardAccountB: new PublicKey('DpRueBHHhrQNvrjZX7CwGitJDJ8eZc3AHcyFMG4LqCQR'),

        },
    },

    'RAY-USDT': {
        protocolVersion: 1,
        protocolSubVersion: 1,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
        tknMint1: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        lpMint: new PublicKey("C3sT1R3nsw4AVdepvLTLKr5Gvszr7jufyBWUCvy4TUvT"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        strategyBorrowCreditMint0: new PublicKey('CoheXVD8cAdVaKznfay22dBpfML5Fbz5g4j67syKgRg4'),
        strategyBorrowCreditMint1: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),

        strategyAccount: new PublicKey('5ShBNHXC9DdqMMEWTFzexs8d6vKCYuHFw34gq9YK35c3'),
        strategyAuthority: new PublicKey('6LfRzuiTDcto2C7EJg423goHynNFswdfbri9gjHh4mWE'),
        strategyFarmInfo: new PublicKey('3xwbRCx5Zex1FwEDXjioeQ6kk2XcM1uTw67tdE2WhsnD'),
        strategyTknAccount0: new PublicKey('8XsRpCVJP19dtizBP9F5t4kGtg8h1rpdsYvyWKJCVVYY'),
        strategyTknAccount1: new PublicKey('CEdiqB4KEE8WVsp4vyhDkgq7HWPds64Be9jSpocN36Sa'),
        strategyLpAccount: new PublicKey('3yxGJisoYe2pgsUzfYoXnEs8Nwgr9dhrBq32C7oSrrrH'),
        strategRewardAccount: new PublicKey('CEdiqB4KEE8WVsp4vyhDkgq7HWPds64Be9jSpocN36Sa'),
        strategRewardAccountB: new PublicKey('CEdiqB4KEE8WVsp4vyhDkgq7HWPds64Be9jSpocN36Sa'),
        strategyBorrowCreditAccount0: new PublicKey('4npVB2cMX16D5aV56atXFsitvgwadqZAMvcjT7bAaAWr'),
        strategyBorrowCreditAccount1: new PublicKey('AzKYaZYtazkPN6eaFvPCv89R5MEz9iXcR91TeyX6TZNY'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // usdt
                lendingPoolInfoAccount: new PublicKey("EyqWUeme2B1dhuwJvJVi2coYPcGWmWrakcpsSFeikrhb"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("Acx3Ky9pk8CyYftA9HYF31EbVhBDi21EqJsFtMW2XxXW"),
                lendingPoolFeeAccount: new PublicKey("7gAN5Y4hGAG2A9vyr9dURGosjmo4Rwiaqz4iKZGNenE1"),
                lendingPoolShareMint: new PublicKey("8TtsTZQ6mU4YSW5jw4sDjSDEG1CW8QLpK7C9g5TVgBvn"),
                lendingPoolShareAccount: new PublicKey("EfLgyXRGFi9MUCMgrsFBuAJ7pMPXBceKhD6x4PgdvLLc"),
                lendingPoolCreditMint: new PublicKey("CoheXVD8cAdVaKznfay22dBpfML5Fbz5g4j67syKgRg4"),
                lendingPoolCreditAccount: new PublicKey("EAQxDXsA6RXxWtA1PwZNnTnj2MapHBtMzvUmfuGPJCPX"),
            },
            "1":{
                tknMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"), // ray
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('7UF3m8hDGZ6bNnHzaT2YHrhp7A7n9qFfBj6QEpHPv5S8'),
            ammTargetOrders: new PublicKey('3K2uLkKwVVPvZuMhcQAPLF8hw95somMeNwJS7vgWYrsJ'),

            ammCoinAccount: new PublicKey('3wqhzSB9avepM9xMteiZnbJw75zmTBDVmPFLTQAGcSMN'),
            ammPcAccount: new PublicKey('5GtSbKJEPaoumrDzNj4kGkgZtfDyUceKaHrPziazALC1'),
            poolWithdrawQueue: new PublicKey('8VuvrSWfQP8vdbuMAP9AkfgLxU9hbRR6BmTJ8Gfas9aK'),
            poolTempLpTokenAccount: new PublicKey('FBzqDD1cBgkZ1h6tiZNFpkh4sZyg6AG8K5P9DSuJoS5F'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('teE55QrL4a4QSfydR9dnHF97jgCfptpuigbb53Lo95g'),
            serumBids: new PublicKey('AvKStCiY8LTp3oDFrMkiHHxxhxk4sQUWnGVcetm4kRpy'),
            serumAsks: new PublicKey('Hj9kckvMX96mQokfMBzNCYEYMLEBYKQ9WwSc1GxasW11'),
            serumEventQueue: new PublicKey('58KcficuUqPDcMittSddhT8LzsPJoH46YP4uURoMo5EB'),
            serumCoinVault: new PublicKey('2kVNVEgHicvfwiyhT2T51YiQGMPFWLMSp8qXc1hHzkpU'),
            serumPCVault: new PublicKey('5AXZV7XfR7Ctr6yjQ9m9dbgycKeUXWnWqHwBTZT6mqC7'),
            serumVaultSigner: new PublicKey('HzWpBN6ucpsA9wcfmhLAFYqEUmHjE9n2cGHwunG5avpL'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID,
            stakePoolId: new PublicKey('AvbVWpBi2e4C9HPmZgShGdPoNydG4Yw8GJvG9HUcLgce'),
            stakePoolAuthority: new PublicKey('8JYVFy3pYsPSpPRsqf43KSJFnJzn83nnRLQgG88XKB8q'),
            stakePoolLpAccount: new PublicKey('4u4AnMBHXehdpP5tbD6qzB5Q4iZmvKKR5aUr2gavG7aw'),
            stakePoolRewardAccount: new PublicKey('HCHNuGzkqSnw9TbwpPv1gTnoqnqYepcojHw9DAToBrUj'),
            stakePoolRewardAccountB: new PublicKey('HCHNuGzkqSnw9TbwpPv1gTnoqnqYepcojHw9DAToBrUj'),
        },
    },

    'RAY-SRM': {
        protocolVersion: 1,
        protocolSubVersion: 1,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),
        tknMint1: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        lpMint: new PublicKey("7P5Thr9Egi2rvMmEuQkLn8x8e8Qro7u2U7yLD2tU2Hbe"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        strategyBorrowCreditMint0: new PublicKey('DqKuxgMxLPDCXtoQzLG1p85S2i3tP3EaeUVDAw7P8Nt4'),
        strategyBorrowCreditMint1: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),
        // tknDecimal0 : 6,
        // tknDecimal1 : 6,
        // lpDecimal: 6,
        strategyAccount: new PublicKey('Dxs5pAPwZH42NvMa8Kgi9PchwUHYWwPb9GtZCsEFC2ed'),
        strategyAuthority: new PublicKey('3DTEew5qLwDk5VVYrscXohcbyx5pk4t99MxuMqmC1x6Z'),
        strategyFarmInfo: new PublicKey('7MLzntQJRe34WY7Ji3RraLx4fPc9k2CpatzYJtYn9meV'),
        strategyTknAccount0: new PublicKey('7fu3PSHTgQ3NygKKYH64miPH3A9jk3LtxCAbgy2GzB8q'),
        strategyTknAccount1: new PublicKey('HomjYBF4VBjLP2rjyaZP92qA3aG9FvYgaRLYt6th59bM'),
        strategyLpAccount: new PublicKey('GtRehrwTdKvizPKiy3ykFNgGzjkg5HhYAJPfGZXUsvdB'),
        strategRewardAccount: new PublicKey('HomjYBF4VBjLP2rjyaZP92qA3aG9FvYgaRLYt6th59bM'),
        strategRewardAccountB: new PublicKey('HomjYBF4VBjLP2rjyaZP92qA3aG9FvYgaRLYt6th59bM'),
        strategyBorrowCreditAccount0: new PublicKey('DUsHuyUoo72QHn5Hg4aSANmTCihsBRN482HT6LiHTqhs'),
        strategyBorrowCreditAccount1: new PublicKey('B8vvx1Zs1MjDps6vq6KSDKhfSxmE8iDeKVjpVFoxfQWX'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("B1zB1EuTjnFPLdwySeBYhzeAf3h9buWLbDoG7AHcUTMF"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("FLQtBThLEVvhXdKqq2CREL8sFt8jAFS8szm4HaMYqmJk"),
                lendingPoolFeeAccount: new PublicKey("FdSBYwMEfy21H3k64cvYdir3mxzmnZotiYUsC5iPPoxM"),
                lendingPoolShareMint: new PublicKey("6CZhCFwA7hbqDEoVUQdFpHaCGQU7fSSwhaJWdG4DmsQ6"),
                lendingPoolShareAccount: new PublicKey("C3EjtH3hVuLrU3j1y5ArMFRbAhxFf5hXNfk3b9SU91qN"),
                lendingPoolCreditMint: new PublicKey("DqKuxgMxLPDCXtoQzLG1p85S2i3tP3EaeUVDAw7P8Nt4"),
                lendingPoolCreditAccount: new PublicKey("Ednqn9Zo5HpDX2DRmCWu6x46ZXnHNmTmrq9G8hrTuBnz"),
            },
            "1":{
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('GaqgfieVmnmY4ZsZHHA6L5RSVzCGL3sKx4UgHBaYNy8m'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('7XWbMpdyGM5Aesaedh6V653wPYpEswA864sBvodGgWDp'),
            ammTargetOrders: new PublicKey('9u8bbHv7DnEbVRXmptz3LxrJsryY1xHqGvXLpgm9s5Ng'),

            ammCoinAccount: new PublicKey('3FqQ8p72N85USJStyttaohu1EBsTsEZQ9tVqwcPWcuSz'),
            ammPcAccount: new PublicKey('384kWWf2Km56EReGvmtCKVo1BBmmt2SwiEizjhwpCmrN'),
            poolWithdrawQueue: new PublicKey('58z15NsT3JJyfywFbdYzn2GVeDDC444WHyUrssZ5tCm7'),
            poolTempLpTokenAccount: new PublicKey('8jqpuijsM2ne5dkwLyjQxa9oCbYEjM6bE1uBaFXmC3TE'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('Cm4MmknScg7qbKqytb1mM92xgDxv3TNXos4tKbBqTDy7'),
            serumBids: new PublicKey('G65a5G6xHpc9zV8tGhVSKJtz7AcAJ8Q3hbMqnDJQgMkz'),
            serumAsks: new PublicKey('7bKEjcZEqVAWsiRGDnxXvTnNwhZLt2SH6cHi5hpcg5de'),
            serumEventQueue: new PublicKey('4afBYfMNsNpLQxFFt72atZsSF4erfU28XvugpX6ugvr1'),
            serumCoinVault: new PublicKey('5QDTh4Bpz4wruWMfayMSjUxRgDvMzvS2ifkarhYtjS1B'),
            serumPCVault: new PublicKey('76CofnHCvo5wEKtxNWfLa2jLDz4quwwSHFMne6BWWqx'),
            serumVaultSigner: new PublicKey('AorjCaSV1L6NGcaFZXEyUrmbSqY3GdB3YXbQnrh85v6F'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID,
            stakePoolId: new PublicKey('5DFbcYNLLy5SJiBpCCDzNSs7cWCsUbYnCkLXzcPQiKnR'),
            stakePoolAuthority: new PublicKey('DdFXxCbn5vpxPRaGmurmefCTTSUa5XZ9Kh6Noc4bvrU9'),
            stakePoolLpAccount: new PublicKey('792c58UHPPuLJcYZ6nawcD5F5NQXGbBos9ZGczTrLSdb'),
            stakePoolRewardAccount: new PublicKey('5ihtMmeTAx3kdf459Yt3bqos5zDe4WBBcSZSB6ooNxLt'),
            stakePoolRewardAccountB: new PublicKey('5ihtMmeTAx3kdf459Yt3bqos5zDe4WBBcSZSB6ooNxLt'),
        },
    },

    'RAY-ETH' : {
        protocolVersion: 1,
        protocolSubVersion: 1,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
        tknMint1: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        lpMint: new PublicKey("mjQH33MqZv5aKAbKHi8dG3g3qXeRQqq1GFcXceZkNSr"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        strategyBorrowCreditMint0: new PublicKey('BKKbCDggM83SPLFd1jRPu1ZsCv9nXkwZVne11N9FEs9w'),
        strategyBorrowCreditMint1: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),
        tknDecimal0 : 6,
        tknDecimal1 : 6,
        lpDecimal: 6,
        strategyAccount: new PublicKey('3wM65R2w5fcMgePmpD4GU6zGGT6XHS36cNcLfZjtQEbD'),
        strategyAuthority: new PublicKey('9GdEdyZgTcmBzh9rGfWjCrrhF2VLByPN2uhsuf8BiAKk'),
        strategyFarmInfo: new PublicKey('7ZsVQVWzsWYpLJWpnPSbmqLRqdAmcxzZkzkQffHnKDYW'),
        strategyTknAccount0: new PublicKey('7D5EzXznEht2tHe6BYemnLzCVxweSMCw2WJgPCpD8uuu'),
        strategyTknAccount1: new PublicKey('7cWTrY5MppAUhxgaxFwgi3CvJJLkVpN8Lyx4nuLJP8rf'),
        strategyLpAccount: new PublicKey('CUxija4mmWR5zNwpvMJ2rfWvk1Sr4EWPqvnmhWcXiwrw'),
        strategRewardAccount: new PublicKey('7cWTrY5MppAUhxgaxFwgi3CvJJLkVpN8Lyx4nuLJP8rf'),
        strategRewardAccountB: new PublicKey('7cWTrY5MppAUhxgaxFwgi3CvJJLkVpN8Lyx4nuLJP8rf'),
        strategyBorrowCreditAccount0: new PublicKey('DZgvYhY69tK1V7gcbuthQtATpnbQamZtvPuToqjoZSW4'),
        strategyBorrowCreditAccount1: new PublicKey('3zTwSkG9eg5PLWLRb8UrQrKouuLqyytgCZGk1Q5LxT4m'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("CKMQxUz1nkn3NS5B9AUD1uyWNL8iN2piG9LVt1RvWXzj"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("9MH38iiDX4Pk37U6TXLqz2783RspNhwBTYwBNHp8WUzP"),
                lendingPoolFeeAccount: new PublicKey("8UPe7Fcm2f1QEFQh2YNr1jg2vgQmj4CXhLYEWgStHd8B"),
                lendingPoolShareMint: new PublicKey("B8QXcUv5FFwyHH5V88g6PhYBc8fQvwSpza4C9PsiRpQD"),
                lendingPoolShareAccount: new PublicKey("C5X2Q2K2jQtwpuqHKnLVJ1ZsvL9BMRwddMgqaQ5UGNkC"),
                lendingPoolCreditMint: new PublicKey("BKKbCDggM83SPLFd1jRPu1ZsCv9nXkwZVne11N9FEs9w"),
                lendingPoolCreditAccount: new PublicKey("9A3KAmmv1VyqNqVGBM6T9b1dp9Ax9xxdeXEgedo8U7Gh"),
            },
            "1":{
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('8iQFhWyceGREsWnLM8NkG9GC8DvZunGZyMzuyUScgkMK'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('7iztHknuo7FAXVrrpAjsHBEEjRTaNH4b3hecVApQnSwN'),
            ammTargetOrders: new PublicKey('JChSqhn6yyEWqD95t8UR5DaZZtEZ1RGGjdwgMc8S6UUt'),

            ammCoinAccount: new PublicKey('G3Szi8fUqxfZjZoNx17kQbxeMTyXt2ieRvju4f3eJt9j'),
            ammPcAccount: new PublicKey('7MgaPPNa7ySdu5XV7ik29Xoav4qcDk4wznXZ2Muq9MnT'),
            poolWithdrawQueue: new PublicKey('C9aijsE3tLbVyYaXXHi45qneDL5jfyN8befuJh8zzpou'),
            poolTempLpTokenAccount: new PublicKey('3CDnyBsNnexdvfvo6ASde5Q4e72jzMQFHRRkSQr49vEG'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('6jx6aoNFbmorwyncVP5V5ESKfuFc9oUYebob1iF6tgN4'),
            serumBids: new PublicKey('Hdvh4ZGL9MkiQApNqfZtdmd4jM6Sz8e9akCUuxxkYhb8'),
            serumAsks: new PublicKey('7vWmTv9Mh8XbAxcduEqed2dLtro4N7hFroqch6mMxYKM'),
            serumEventQueue: new PublicKey('EgcugBBSwM2FxqLQx5S6zAiU9x9qRS8qMVRMDFFU4Zty'),
            serumCoinVault: new PublicKey('EVVtYo4AeCbmn2dYS1UnhtfjpzCXCcN26G1HmuHwMo7w'),
            serumPCVault: new PublicKey('6ZT6KwvjLnJLpFdVfiRD9ifVUo4gv4MUie7VvPTuk69v'),
            serumVaultSigner: new PublicKey('HXbRDLcX2FyqWJY95apnsTgBoRHyp7SWYXcMYod6EBrQ'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID,
            stakePoolId: new PublicKey('B6fbnZZ7sbKHR18ffEDD5Nncgp54iKN1GbCgjTRdqhS1'),
            stakePoolAuthority: new PublicKey('6amoZ7YBbsz3uUUbkeEH4vDTNwjvgjxTiu6nGi9z1JGe'),
            stakePoolLpAccount: new PublicKey('BjAfXpHTHz2kipraNddS6WwQvGGtbvyobn7MxLEEYfrH'),
            stakePoolRewardAccount: new PublicKey('7YfTgYQFGEJ4kb8jCF8cBrrUwEFskLin3EbvE1crqiQh'),
            stakePoolRewardAccountB: new PublicKey('7YfTgYQFGEJ4kb8jCF8cBrrUwEFskLin3EbvE1crqiQh'),
        },
    },

    'RAY-SOL' : {
        protocolVersion: 1,
        protocolSubVersion: 1,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.solToken.mint,
        tknMint1: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        lpMint: new PublicKey("89ZKE4aoyfLBe2RuV6jM3JGNhaV18Nxh8eNtjRcndBip"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        strategyBorrowCreditMint0: new PublicKey('7x61NrCzeekHwgW5Nk4afMg2sxjMK6RyMkx8tCzzX4qG'),
        strategyBorrowCreditMint1: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),
        tknDecimal0 : 9,
        tknDecimal1 : 6,
        lpDecimal: 6,
        strategyAccount: new PublicKey('CdGmR4ZsFeKc9uQ9PubgmdstDM9Yny6UwnhgiRLpBGF5'),
        strategyAuthority: new PublicKey('HPbHhWB4Bcv8rW9tFVnP45NzP8ccPMfzBgfjBDSHiH8J'),
        strategyFarmInfo: new PublicKey('9fvS6hfd7dqQ9MXuoKjbMAP1GsiY3KgnmdL8JDdj7XHq'),
        strategyTknAccount0: new PublicKey('HxGebtQbMHVWXnvDG62J4YJENXtPBrdkWtS5CefYETTD'),
        strategyTknAccount1: new PublicKey('4mGFaFF4mAekF4z951KykfLfNifb9w78XSyht4id2vew'),
        strategyLpAccount: new PublicKey('GpBWcYsaLL3SqfHTH6EnpTCBphSo8oyJsG1H5UGPtSGc'),
        strategRewardAccount: new PublicKey('4mGFaFF4mAekF4z951KykfLfNifb9w78XSyht4id2vew'),
        strategRewardAccountB: new PublicKey('4mGFaFF4mAekF4z951KykfLfNifb9w78XSyht4id2vew'),
        strategyBorrowCreditAccount0: new PublicKey('4zkctPV1xHvKP7rfzv8NwkyWuDJNudJnmKBNvyUubdd4'),
        strategyBorrowCreditAccount1: new PublicKey('F5wQQSvfE4mfvJ8padaVVBw6mKdn882KZzF145iutAFT'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("EnZC8MB6QLTxwN1LNqCXYC7XMpvXqitnYQPf5y5AcQRn"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("GiJwrxQW5NQWWAva4rnDMXwHxfrhyUzwMX5to1pmCCgF"),
                lendingPoolFeeAccount: new PublicKey("2BDZqoVKAX3PJKeZJytjk7oEpbUu3jvdgdi6tA8VusnY"),
                lendingPoolShareMint: new PublicKey("92Zst3rEoJsyZUW2yNc2811GtkBwFrm3tqgxMTtFWuSB"),
                lendingPoolShareAccount: new PublicKey("Hyi1jMgc9MMEZyaG9ziL2PvT7zbeRNKhb5K1kj9bxz4x"),
                lendingPoolCreditMint: new PublicKey("7x61NrCzeekHwgW5Nk4afMg2sxjMK6RyMkx8tCzzX4qG"),
                lendingPoolCreditAccount: new PublicKey("WuPCgCuyLSXatdjyWqkGjCPSQFgKLwcfsNR9fDq3hVL"),
            },
            "1":{
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('6Su6Ea97dBxecd5W92KcVvv6SzCurE2BXGgFe9LNGMpE'),
            ammTargetOrders: new PublicKey('5hATcCfvhVwAjNExvrg8rRkXmYyksHhVajWLa46iRsmE'),

            ammCoinAccount: new PublicKey('Em6rHi68trYgBFyJ5261A2nhwuQWfLcirgzZZYoRcrkX'),
            ammPcAccount: new PublicKey('3mEFzHsJyu2Cpjrz6zPmTzP7uoLFj9SbbecGVzzkL1mJ'),
            poolWithdrawQueue: new PublicKey('FSHqX232PHE4ev9Dpdzrg9h2Tn1byChnX4tuoPUyjjdV'),
            poolTempLpTokenAccount: new PublicKey('87CCkBfthmyqwPuCDwFmyqKWJfjYqPFhm5btkNyoALYZ'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('C6tp2RVZnxBPFbnAsfTjis8BN9tycESAT4SgDQgbbrsA'),
            serumBids: new PublicKey('C1nEbACFaHMUiKAUsXVYPWZsuxunJeBkqXHPFr8QgSj9'),
            serumAsks: new PublicKey('4DNBdnTw6wmrK4NmdSTTxs1kEz47yjqLGuoqsMeHvkMF'),
            serumEventQueue: new PublicKey('4HGvdannxvmAhszVVig9auH6HsqVH17qoavDiNcnm9nj'),
            serumCoinVault: new PublicKey('6U6U59zmFWrPSzm9sLX7kVkaK78Kz7XJYkrhP1DjF3uF'),
            serumPCVault: new PublicKey('4YEx21yeUAZxUL9Fs7YU9Gm3u45GWoPFs8vcJiHga2eQ'),
            serumVaultSigner: new PublicKey('7SdieGqwPJo5rMmSQM9JmntSEMoimM4dQn7NkGbNFcrd'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID,
            stakePoolId: new PublicKey('HUDr9BDaAGqi37xbQHzxCyXvfMCKPTPNF8g9c9bPu1Fu'),
            stakePoolAuthority: new PublicKey('9VbmvaaPeNAke2MAL3h2Fw82VubH1tBCzwBzaWybGKiG'),
            stakePoolLpAccount: new PublicKey('A4xQv2BQPB1WxsjiCC7tcMH7zUq255uCBkevFj8qSCyJ'),
            stakePoolRewardAccount: new PublicKey('6zA5RAQYgazm4dniS8AigjGFtRi4xneqjL7ehrSqCmhr'),
            stakePoolRewardAccountB: new PublicKey('6zA5RAQYgazm4dniS8AigjGFtRi4xneqjL7ehrSqCmhr'),
        },
    },

    'ATLAS-USDC': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        tknMint1: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
        lpMint: new PublicKey("9shGU9f1EsxAbiR567MYZ78WUiS6ZNCYbHe53WUULQ7n"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
        tknDecimal0 : 6,
        tknDecimal1 : 8,
        lpDecimal: 8,


        strategyBorrowCreditMint0: new PublicKey('CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E'),
        strategyBorrowCreditMint1: new PublicKey('3nAgm2XrSi3RNDWz4wCvUWwQW3QQE7s5i7MxNz8r8mGZ'),

        strategyAccount: new PublicKey('6yFKnVfzFwus73zms4XcGAsrWT6qowaiYyAWTiLHZ3e4'),
        strategyAuthority: new PublicKey('tuhwncAHHh21ENeQwrbWMdoTi92AswM34fGK5eYQRGi'),
        strategyFarmInfo: new PublicKey('AFin3LBuheAnVZsaCgpQFZDy1PfME3LNB2Ho1anWhGoR'),
        strategyTknAccount0: new PublicKey('H4bTG8EEqBjEMqBiiuYC8yf8LDwMyS5jf3J6XxiAfBMQ'),
        strategyTknAccount1: new PublicKey('6J5nkw5kVTDmPVLnQqHSzfeSaSv5bwp89475MDYBCEhZ'),
        strategyLpAccount: new PublicKey('BCxuErEvftUMCrbETKUkbPNbpNJFx8fNJdcm4V2KZkW2'),
        strategRewardAccount: new PublicKey('BBySKA7rkq2JNjuZkJUrRHMWX3Ycups9XfXexrpcZgdX'),
        strategRewardAccountB: new PublicKey('6J5nkw5kVTDmPVLnQqHSzfeSaSv5bwp89475MDYBCEhZ'),
        strategyBorrowCreditAccount0: new PublicKey('3PLeXQy9U1vuBb7xgBDnE3DhUSMHMqvhwbg2HvQcmrtH'),
        strategyBorrowCreditAccount1: new PublicKey('FDXmN9SkJzFdM17SFnVsiAkHM8SbMVACrmBdTf5hW9JZ'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
                strategyCreditAccounts: [
                    new PublicKey("GWnKzyvCJcQXvSwmj9msHUrCEv73XkbkF3csoHjwSDQL")
                ]
            },
            "1":{
                tknMint: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"), // atlas
                lendingPoolInfoAccount: new PublicKey("FnkmnUqazYmSm791rSTSXYbAzDzsuHJBgySgNZeCHGDJ"),
                lendingPoolTknAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
                lendingPoolFeeAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
                lendingPoolShareMint: new PublicKey("4mygt5bFQrbXH9gNg75j1KVTrKGhvcYiQjir6FJ8afYH"),
                lendingPoolShareAccount: new PublicKey("Eb4Ai2PXmRX3V9TX6awjNdBXZKGRyCgTmQu6Pni9NnTb"),
                lendingPoolCreditMint: new PublicKey("3nAgm2XrSi3RNDWz4wCvUWwQW3QQE7s5i7MxNz8r8mGZ"),
                lendingPoolCreditAccount: new PublicKey("3PwecBTLVt8zqKadSFDjeKH7Swzt1GxvU27urj66L89P"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('2bnZ1edbvK3CK3LTNZ5jH9anvXYCmzPR4W2HQ6Ngsv5K'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('EzYB1U93e8E1KGJdUzmnwgNBFMP9E1XAuyosmiPGLAvD'),
            ammTargetOrders: new PublicKey('DVxJDo3E9zfGgvSkC2DYS5fsv5AyXA7gXpcs1fHFrP3y'),

            ammCoinAccount: new PublicKey('FpFV46UVvRtcrRvYtKYgJpJtP1tZkvssjhrLUfoj8Cvo'),
            ammPcAccount: new PublicKey('GzwX68f1ZF4dKnAJ58RdET8sPvvnYktbDEHmjoGw7Umk'),
            poolWithdrawQueue: new PublicKey('26SuCukyzbYo5kzeufaSoMjRPStAwqfVzTXb4QGynTit'),
            poolTempLpTokenAccount: new PublicKey('HcoA8ucDBjEUVMjvURaS9CZgdEUbq8jRieGabq48mCL8'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('Di66GTLsV64JgCCYGVcY21RZ173BHkjJVgPyezNN7P1K'),
            serumBids: new PublicKey('2UabAccF1AFPcNqv9D46JgyGnErnaYAJuCwyaT5dCkHc'),
            serumAsks: new PublicKey('9umNLTbks7S51TEB8XF4jeCxwyq3qmdHrFDMFB8cT1gv'),
            serumEventQueue: new PublicKey('EYU32k5waRUxF521k2KFSuhEj11HQvg4MbQ9tFXuixLi'),
            serumCoinVault: new PublicKey('22a8dDQwHmmnW4M4WuSXHC9NdQAufZ2V8at3EtPzBqFj'),
            serumPCVault: new PublicKey('5Wu76Qx7EoiR79zVVV49cZDYZ5csZaKFiHKYtCjF9FNU'),
            serumVaultSigner: new PublicKey('FiyZW6n5VE64Yubn2PUFAxbmB2FZXhYce74LzJUhqSZg'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('93wRz2LeQ3TJoair827VTng62MjCzYDgJjG9Q5GmQ3Pd'),
            stakePoolAuthority: new PublicKey('4yrRmmckKKGsPbCSFFupGqZrJhAFxQ4hN2DMC9Bh2pHo'),
            stakePoolLpAccount: new PublicKey('HmE21hdD32ZjDnR5DvuNz7uS5q4bWbqf8jV2shx8kXmA'),
            stakePoolRewardAccount: new PublicKey('9iQsupP7JagNLkp1bvdWWGVkzsLFfHUwDbh9KZPoXbw5'),
            stakePoolRewardAccountB: new PublicKey('5oQU1hU6qggyT4CU2AMPcWTcZdSRZeQBy7How5WuEp7A'),
        },
    },

    'POLIS-USDC': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        tknMint1: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),
        lpMint: new PublicKey("8MbKSBpyXs8fVneKgt71jfHrn5SWtX8n4wMLpiVfF9So"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),

        tknDecimal0 : 6,
        tknDecimal1 : 8,
        lpDecimal: 8,

        strategyBorrowCreditMint0: new PublicKey('CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E'),
        strategyBorrowCreditMint1: new PublicKey('EkKFNt7PBRdWy8EpmZAbAZdvXZpSKvdwMfo8eotN1PEr'),

        strategyAccount: new PublicKey('DYreSy9eYRJYBR49PtDYsCHLHeU6TZKjCQT7unReKMY3'),
        strategyAuthority: new PublicKey('467dAKUvGbwvpNyRgcU8hvV7KHvcoZtWwkkmfma8VvEA'),
        strategyFarmInfo: new PublicKey('3HS3vn5C3YqkUJmi4ipwQRSsCxj59SP6y77SSpEzhVQG'),
        strategyTknAccount0: new PublicKey('BNpdoPVKNvFp73KpUynZUy3SDriqyaKU2FZQhUzYqKEa'),
        strategyTknAccount1: new PublicKey('BqRsjrJvAUohEs7geuKJ8hXyUZbrBYM1cuDdQZSAE7Cn'),
        strategyLpAccount: new PublicKey('J8cYbDLpByi15ZPXyKHCkzY6oZAcM5mVjx1gyvLeB7xq'),
        strategRewardAccount: new PublicKey('4YqePNRwYSzwdTMbaPB1rGkqQVDS38gHo3L6nEQJZ7pM'),
        strategRewardAccountB: new PublicKey('BqRsjrJvAUohEs7geuKJ8hXyUZbrBYM1cuDdQZSAE7Cn'),
        strategyBorrowCreditAccount0: new PublicKey('767ida3bzKCNUBXKvdu86ojWe7QR98URxSZJMv6uKX4e'),
        strategyBorrowCreditAccount1: new PublicKey('FWGyDubY1jwECaRu3487sqB6mpBSjr3gndE6bFNz4nWf'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
                strategyCreditAccounts: [
                    new PublicKey("GWnKzyvCJcQXvSwmj9msHUrCEv73XkbkF3csoHjwSDQL")
                ]
            },
            "1":{
                tknMint: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"), // polis
                lendingPoolInfoAccount: new PublicKey("BWJkfNQnYt817V6sKxEJ3sFcivcXZgfKGCe8Z9f4LcVj"),
                lendingPoolTknAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
                lendingPoolFeeAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
                lendingPoolShareMint: new PublicKey("FenVvq6s6S3McD1BCm76Ktz1EvRNCB4qYKGFU76fB7Fj"),
                lendingPoolShareAccount: new PublicKey("GKTqMGVCgXJaDzjYfPdgMbVfnzCKDj6KqRpykauw19do"),
                lendingPoolCreditMint: new PublicKey("EkKFNt7PBRdWy8EpmZAbAZdvXZpSKvdwMfo8eotN1PEr"),
                lendingPoolCreditAccount: new PublicKey("FGKikDsnBPQ5m7jgbNNbHaR1gh1T8GYJ5sPYWoYdoE4p"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('9xyCzsHi1wUWva7t5Z8eAvZDRmUCVhRrbaFfm3VbU4Mf'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('12A4SGay36i2cSwA4JSdvg7rWSmCz8JzhsoDqMM8Yns7'),
            ammTargetOrders: new PublicKey('6bszsB6zxw2YowrEm26XYhh57HKQEVMRx5YMvPSSVQNh'),

            ammCoinAccount: new PublicKey('7HgvC7GdmUt7kMivdLMovLStW25avFsW9GDXgNr525Uy'),
            ammPcAccount: new PublicKey('9FknRLGpWBqYg7fXQaBDyWWdu1v2RwUM6zRV6CiPjWBD'),
            poolWithdrawQueue: new PublicKey('6uN62R1i31QVoy9cmQAeDrfLccMZDjQ2gmwv2D4iBTJT'),
            poolTempLpTokenAccount: new PublicKey('FJV66MrqZW8VYGmTuAupstwYtqfF6ULLPP9voYtnc8DS'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('HxFLKUAmAMLz1jtT3hbvCMELwH5H9tpM2QugP8sKyfhW'),
            serumBids: new PublicKey('Bc5wovapX1tRjZfyZVpsGH73Gq5LGN4ANsj8kaEhfY7c'),
            serumAsks: new PublicKey('4EHg2ANFFEKLFkpLxgiyinJ1UDWsG2p8rVoAjFfjMDKc'),
            serumEventQueue: new PublicKey('qeQC4u5vpo5QMC17V5UMkQfK67vu3DHtBYVT1hFSGCK'),
            serumCoinVault: new PublicKey('5XQ7xYE3ujVA21HGbvFGVG4pLgqVHSfR9anz2EfmZ3nA'),
            serumPCVault: new PublicKey('ArUDWPwzGQFfa7t7nSdkp1Dj6tYA3icXEq8K7goz9WoG'),
            serumVaultSigner: new PublicKey('FHX9fPAUVA1MxPme28f4eeVH81QVRHDWofa2V6FUJaiR'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('7qcihXTsRW5wS5BgK7iuD84W43ECByoJP45R3hu2r6mF'),
            stakePoolAuthority: new PublicKey('3MAzzKcBPJ2ykDHX1CBHzUJafy41FaTaLymg8z6SgX2Q'),
            stakePoolLpAccount: new PublicKey('FwLD6rHMwm5H6edDPuGjxdBMk3u38frsnytTkPmVZVP3'),
            stakePoolRewardAccount: new PublicKey('AWQr1eX2RZiMadfeEpgPEQJBJq88f7dPLK3nqriKCPJp'),
            stakePoolRewardAccountB: new PublicKey('DfofnRgWFPHVaxaLGSdXvFGhr4TRwjdwQQvgkjNNkJfZ'),
        },
    },

    'ATLAS-RAY': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        tknMint1: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
        lpMint: new PublicKey("418MFhkaYQtbn529wmjLLqL6uKxDz7j4eZBaV1cobkyd"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),

        strategyBorrowCreditMint0: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),
        strategyBorrowCreditMint1: new PublicKey('3nAgm2XrSi3RNDWz4wCvUWwQW3QQE7s5i7MxNz8r8mGZ'),

        strategyAccount: new PublicKey('5gWoqwLPnRtXg4UDVo7RRkVq27bM8YVVhD675rZrSnpp'),
        strategyAuthority: new PublicKey('DrNCerGUvaPxyR4Bcsn4woinzUgfXYtfcGg8tz71URZr'),
        strategyFarmInfo: new PublicKey('3Ejdvar3zCtTt4nEnbksf2RZjV3MqSjSzBagWTobwnry'),
        strategyTknAccount0: new PublicKey('26YbzifCC9qsEGy6cYiHTaoShoteST85HRRkZAnGmGdk'),
        strategyTknAccount1: new PublicKey('Cnbvdaa9geGM8kK7fCt2oRETwTMeYG65peiMd28GAgY2'),
        strategyLpAccount: new PublicKey('7SVBgg8igTLgSNowTSkqqkwMrB7tptYMifRjdkPBiY21'),
        strategRewardAccount: new PublicKey('26YbzifCC9qsEGy6cYiHTaoShoteST85HRRkZAnGmGdk'),
        strategRewardAccountB: new PublicKey('Cnbvdaa9geGM8kK7fCt2oRETwTMeYG65peiMd28GAgY2'),
        strategyBorrowCreditAccount0: new PublicKey('GKxNMN4uR7XTKf8b3AxZVgL5VCnH4QbRdEJHahtfXNr2'),
        strategyBorrowCreditAccount1: new PublicKey('9rv2R8AVUGGnwxyVSseEmF6ii1Xz6AYHhT7EsrTp8ic6'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            },
            "1":{
                tknMint: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"), // atlas
                lendingPoolInfoAccount: new PublicKey("FnkmnUqazYmSm791rSTSXYbAzDzsuHJBgySgNZeCHGDJ"),
                lendingPoolTknAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
                lendingPoolFeeAccount: new PublicKey("E5ovYitzudRyUy7AS4U52eFgrq1rjr773rRGpYax1nmD"),
                lendingPoolShareMint: new PublicKey("4mygt5bFQrbXH9gNg75j1KVTrKGhvcYiQjir6FJ8afYH"),
                lendingPoolShareAccount: new PublicKey("Eb4Ai2PXmRX3V9TX6awjNdBXZKGRyCgTmQu6Pni9NnTb"),
                lendingPoolCreditMint: new PublicKey("3nAgm2XrSi3RNDWz4wCvUWwQW3QQE7s5i7MxNz8r8mGZ"),
                lendingPoolCreditAccount: new PublicKey("3PwecBTLVt8zqKadSFDjeKH7Swzt1GxvU27urj66L89P"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('F73euqPynBwrgcZn3fNSEneSnYasDQohPM5aZazW9hp2'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('2CbuxnkjsBvaQoAubc5MAmbeZSMn36z8sZnfMvZWH1vb'),
            ammTargetOrders: new PublicKey('6GZrucFa9hAQW7yHiPt3oZj9GkL6oBipngyY1Hw3zMx'),

            ammCoinAccount: new PublicKey('33UaaUmmySzxK7q3yhmQiXMrW1tQrwqojyD6ZEFgM6FZ'),
            ammPcAccount: new PublicKey('9SYRTwYE5UV2cxEuRz8iiJcV8gMbMnJUYFC8zgDAsUwB'),
            poolWithdrawQueue: new PublicKey('6bznLHPLPA3axnRfjh3sFzkxeMUQDLWhDuaHzjGL1EE6'),
            poolTempLpTokenAccount: new PublicKey('FnmoaJqFYHotLTG2Ur84jSUmVUACVWrBvBvRHdPzhqvb'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('Bn7n597jMxU4KjBPUo3QwJhbqr5145cHy31p6EPwPHwL'),
            serumBids: new PublicKey('9zAgdk4Na8fBKLiTWzsqZwgYQETuHBDjPe2GYqHy17L'),
            serumAsks: new PublicKey('Fv6MY3w7PP7A54cuPQHevQNuwekGy8yksXWioBsyVd42'),
            serumEventQueue: new PublicKey('75iVJf9QKovBdsvgxcCFfwn2N4QyxEXyKxQdBvZTdzjr'),
            serumCoinVault: new PublicKey('9tBagdm862GCoxZNFvXv7HFjLUFmypxPYxfiT3j9S3h3'),
            serumPCVault: new PublicKey('4oc1kGhKByyxRnh3oXupjTn5P6JwWPnoxwvLxjZzi2vE'),
            serumVaultSigner: new PublicKey('EK2TjcyoXzUweNJnJupQf6sZK8756mvBJeGBvi6y18Cq'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('BHHhNLdJn69K1XPJcpcw4MBY3TPetpLxhj8s4K4ydsDV'),
            stakePoolAuthority: new PublicKey('DjYd34HtSwwAGfTfK13onUyq975akjzfW2abaK5YTRaS'),
            stakePoolLpAccount: new PublicKey('5RPJHt2V4baK7gY1E99xCRBtEzScuNEVPr9vA9PapLhs'),
            stakePoolRewardAccount: new PublicKey('AQwjpEoLwnHYnsdSnzwRpSkTSeLDNYZ6tv6odVGzXJvZ'),
            stakePoolRewardAccountB: new PublicKey('DBXQnchh5zQuiEfaE8JBPTre8G1mksVTsHXoSqRPfA3r'),
        },
    },

    'POLIS-RAY': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        tknMint1: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),
        lpMint: new PublicKey("9ysGKUH6WqzjQEUT4dxqYCUaFNVK9QFEa24pGzjFq8xg"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),

        strategyBorrowCreditMint0: new PublicKey('GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR'),
        strategyBorrowCreditMint1: new PublicKey('EkKFNt7PBRdWy8EpmZAbAZdvXZpSKvdwMfo8eotN1PEr'),

        strategyAccount: new PublicKey('14ejNnvPSiiqcpEN3VZ9F1RRuW1E4sB52UpkQ5y7Ytsn'),
        strategyAuthority: new PublicKey('4a2VmoeGJerhskz3LkDNqoD5xgUY2WmKf7KjRTco5AYw'),
        strategyFarmInfo: new PublicKey('3fPQQej27VPGbi3JuA8tKVWj6oDBH1Ckrrx7Ng2VZmD2'),
        strategyTknAccount0: new PublicKey('57zGDfzGepKmjj3y9DAhwbM6TXptZvsU13JQyDVVYA82'),
        strategyTknAccount1: new PublicKey('3wCAXnJYNb2GyKjPqx98Ejt7nEN7Z6DsAMc187nCW71S'),
        strategyLpAccount: new PublicKey('H5BKsd6VzF3EMkoDGSK44AS7JfeKRvvVDwHUH4MyqgTr'),
        strategRewardAccount: new PublicKey('57zGDfzGepKmjj3y9DAhwbM6TXptZvsU13JQyDVVYA82'),
        strategRewardAccountB: new PublicKey('3wCAXnJYNb2GyKjPqx98Ejt7nEN7Z6DsAMc187nCW71S'),
        strategyBorrowCreditAccount0: new PublicKey('Fw6dY7Jbxgvs1iZSmxAUpiKa1bnnX337bMmXBjA58buv'),
        strategyBorrowCreditAccount1: new PublicKey('1nwhLYQ7moSeHM78Ax9xfv8uCxxTXP25vmFidrN2aEy'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            },
            "1":{
                tknMint: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"), // polis
                lendingPoolInfoAccount: new PublicKey("BWJkfNQnYt817V6sKxEJ3sFcivcXZgfKGCe8Z9f4LcVj"),
                lendingPoolTknAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
                lendingPoolFeeAccount: new PublicKey("7Ad6djoPLzigyBnnWjoLh2gQ6Tbw2s6kAdsaVUBq6L8N"),
                lendingPoolShareMint: new PublicKey("FenVvq6s6S3McD1BCm76Ktz1EvRNCB4qYKGFU76fB7Fj"),
                lendingPoolShareAccount: new PublicKey("GKTqMGVCgXJaDzjYfPdgMbVfnzCKDj6KqRpykauw19do"),
                lendingPoolCreditMint: new PublicKey("EkKFNt7PBRdWy8EpmZAbAZdvXZpSKvdwMfo8eotN1PEr"),
                lendingPoolCreditAccount: new PublicKey("FGKikDsnBPQ5m7jgbNNbHaR1gh1T8GYJ5sPYWoYdoE4p"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('5tho4By9RsqTF1rbm9Akiepik3kZBT7ffUzGg8bL1mD'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('UBa61sKev8gr19nqVyN3BZbW2jG7eAGjbjeZvpU4wu8'),
            ammTargetOrders: new PublicKey('FgMtC8pDrSQJUovmnrDiRWgLGVrVSq9kui98re6uRz5i'),

            ammCoinAccount: new PublicKey('Ah9T12tzwnTXWrWVWzLmCrwCEmVHS7HMdWKG4qLUDzJP'),
            ammPcAccount: new PublicKey('J7kjQkrpafcLjL7cCpmMamxLAFnCkGApLTC2QrbHe2NQ'),
            poolWithdrawQueue: new PublicKey('EgZgi8skDug7YecbFuCFxXx3SPFPhbGSVrGiNzLHErkj'),
            poolTempLpTokenAccount: new PublicKey('TYw7qQDt6sqpwUFSRfNBaLHEA1SUxbEWtmZxtZQhojk'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('3UP5PuGN6db7NhWf4Q76FLnR4AguVFN14GvgDbDj1u7h'),
            serumBids: new PublicKey('4tAuffNhWeF2MDWjMDgrRoR8X8Jg3BLvUAaerXzLsFpG'),
            serumAsks: new PublicKey('9W133475h1LZ2ZzY7aJtbJajLDSCn5hNnKcsu6gXgE2G'),
            serumEventQueue: new PublicKey('5DX4tJ8jZt91XzM7JUUPhu6CL4o6UDGnfjLJZtkmEfVT'),
            serumCoinVault: new PublicKey('pLD9GMk4LACBXDJAWJSgbT1batbHgunBVyy8BaVBazG'),
            serumPCVault: new PublicKey('Ah3JVyTAGLbH63XPWDDnJUwV1xYwHhFX2J81CDHomkLk'),
            serumVaultSigner: new PublicKey('5RqVkFy8hUbYDR81ucZhF6rAwpgYJngLJLSynMTeC4vM'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('HHm8Pgnzc56fTUYkicPv4DqGYp5fcPZFV1V1uhixSrMk'),
            stakePoolAuthority: new PublicKey('GHPg6z7HYx1bsdK4W9WpdmV8BcjpPBBsRGMmj9dAD3yq'),
            stakePoolLpAccount: new PublicKey('4wGbaNEGeGjqqgW5S9AAWvQL3LwWZioH1JWMZFBdPFge'),
            stakePoolRewardAccount: new PublicKey('4xrr44aG4kkgqQPZhBre93vg5fFY2htkkEEmTQjx5hiG'),
            stakePoolRewardAccountB: new PublicKey('EanBQNubTJs2fNgeosUcESCfBnvk6bci391U5SH4Kzoo'),
        },
    },

    'GRAPE-USDC': {
        programId: lyfRaydiumProgramId,
        tknMint0: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        tknMint1: new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"),
        lpMint: new PublicKey("A8ZYmnZ1vwxUa4wpJVUaJgegsuTEz5TKy5CiJXffvmpt"),
        rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        rewardMintB: new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"),
        tknDecimal0 : 6,
        tknDecimal1 : 6,
        lpDecimal: 6,


        strategyBorrowCreditMint0: new PublicKey('CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E'),
        strategyBorrowCreditMint1: new PublicKey('39AmuFZrF46JxZuuzwWAGhe677d23tCmTt3gCBY4tsjb'),

        strategyAccount: new PublicKey('Cz7HnSMc1u81Gyke6tfVNVz8xBz7xW4NHobSBtUFUkBi'),
        strategyAuthority: new PublicKey('GHTtd6QhiTdhwM7uzCdLUvwHW7QE7wXZYrxVQUtM2aGd'),
        strategyFarmInfo: new PublicKey('BP9XjLs3GeRR2nBaDFA1nwE9ddbvVPnwSMdvk1QJ3i2L'),
        strategyTknAccount0: new PublicKey('zAwWGhCYSwW1339wvyRAyambYrz8FwDHYzRAeRWuXTM'),
        strategyTknAccount1: new PublicKey('5mPRjHfhQo7s1GKppqKcSuCMhtMY2615bDhxMpUNVxH1'),
        strategyLpAccount: new PublicKey('AW37AwthG94VC3o3ZrkiEVyEYCK1bXPZrDb3yzVfc5Sf'),
        strategRewardAccount: new PublicKey('6NFcaYkeibkCAcVTrDogUP2t5nrpc2a8PHSNmMbctK7G'),
        strategRewardAccountB: new PublicKey('5mPRjHfhQo7s1GKppqKcSuCMhtMY2615bDhxMpUNVxH1'),
        strategyBorrowCreditAccount0: new PublicKey('AgNfKw6VTexGAqv9aZduhXUniaHqoznNxTLN3AQzKL2w'),
        strategyBorrowCreditAccount1: new PublicKey('9sc3ifwgZ2KoRQHRAZbCWw9vmA4p1m3dh2FknbETWBRP'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
                strategyCreditAccounts: [
                    new PublicKey("GWnKzyvCJcQXvSwmj9msHUrCEv73XkbkF3csoHjwSDQL")
                ]
            },
            "1":{
                tknMint: new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"), // grape
                lendingPoolInfoAccount: new PublicKey("G8MGSKf12Kuf1S2w35XwQs7vjiGtxRcgNsLAhBiLeKGb"),
                lendingPoolTknAccount: new PublicKey("HNwBYkGp32m7ptkgvzAj9GEWDpdZoPWiJ66nuonEMsSN"),
                lendingPoolFeeAccount: new PublicKey("HNwBYkGp32m7ptkgvzAj9GEWDpdZoPWiJ66nuonEMsSN"),
                lendingPoolShareMint: new PublicKey("GdphBDVjiUx7MFYsHRd1WL1nu4mmyohZHg9vi5hscJJj"),
                lendingPoolShareAccount: new PublicKey("BLcWDikfY1UffEdm14jmsZ2jiV7wTJNNPxoa4Ci8C3mg"),
                lendingPoolCreditMint: new PublicKey("39AmuFZrF46JxZuuzwWAGhe677d23tCmTt3gCBY4tsjb"),
                lendingPoolCreditAccount: new PublicKey("4MVCD592juy3jw3GAHPSWPCk1zP17izXAsTCGsttz92t"),
            }
        },

        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('vVXfY15WdPsCmLvbiP4hWWECPFeAvPTuPNq3Q4BXfhy'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('A7RFkvmDFN4Qev8XgGAqSr5W75sNhhtCY3ZcGHZiDDo1'),
            ammTargetOrders: new PublicKey('HRiPQyFJfzF7WgC4g2cFbxuKgqn1vKVRjTCuZTNGim36'),

            ammCoinAccount: new PublicKey('BKqBnj1TLpW4UEBbZn6aVoPLLBHDB6NTEL5nFNRqX7e7'),
            ammPcAccount: new PublicKey('AN7XxHrrcFL7629WySWVA2Tq9inczxkbE6YqgZ31rDnG'),
            poolWithdrawQueue: new PublicKey('29WgH1suwTnhL4JUwDMUQQpUzypet8PHEh8jQpZtiDBK'),
            poolTempLpTokenAccount: new PublicKey('3XCGBJpfHV5VYkz92nqzRtHahTiHXjYzVs4PargSpYwS'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('72aW3Sgp1hMTXUiCq8aJ39DX2Jr7sZgumAvdLrLuCMLe'),
            serumBids: new PublicKey('F3PQsAGiFf8fSySjUGgP3NQdAGSnioAThncyfd26GKZ3'),
            serumAsks: new PublicKey('6KyB4XprAw7Mgp1YMMsxRGx8T59Y5Lcu6s1FcwFrXy3i'),
            serumEventQueue: new PublicKey('Due4ZmGX2u7an9DPMvk3uX3sXYgngRatP1XmwzEgk1tT'),
            serumCoinVault: new PublicKey('8FMjC6yopBVYTXcYSGdFgoh6AFpwTdkJAGXxBeoV8xSq'),
            serumPCVault: new PublicKey('5vgxuCqMn7DUt6Le6EGhdMzZjPQrtD1x4TD9zGw3mPte'),
            serumVaultSigner: new PublicKey('FCZkJzztVTx6qKVec25jA3m4XjeGBH1iukGdDqDBHPvG'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('8GBa1cK1NxevoxiRNK6YW9tWuo2xftcA3as9Cu4nhFL7'),
            stakePoolAuthority: new PublicKey('Gab4kPHmj5Hqn1KWEDsKt6Ta8jPtpc53oCPULszMNtyj'),
            stakePoolLpAccount: new PublicKey('eoVzVdFEkKPKY3djJ47RZjvNr5oujYY25uxXwNvrsfg'),
            stakePoolRewardAccount: new PublicKey('AYoDAc5ndfts4Aw6vzH7XUB2GsXamj72aunzBcBCnz2f'),
            stakePoolRewardAccountB: new PublicKey('5i2qZN5UH4UyF3t6HNeC1bXeXhWBZy1pwpCjLDG7AdJJ'),
        },
    },

    // 'LARIX-USDC': {
    //     programId: lyfRaydiumProgramId,
    //     tknMint0: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    //     tknMint1: new PublicKey("Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC"),
    //     lpMint: new PublicKey("7yieit4YsNsZ9CAK8H5ZEMvvk35kPEHHeXwp6naoWU9V"),
    //     rewardMint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
    //     rewardMintB: new PublicKey("Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC"),
    //
    //     strategyAccount: new PublicKey('FmLAyJY3gkNsWrrs4tfQGNDBTWJQc2vwzSqD6DmDP7CB'),
    //     strategyAuthority: new PublicKey('72eo83zVutQWkEGHVRmQNqQZ2DSXXZFsMfpcXBTeTdbs'),
    //     strategyFarmInfo: new PublicKey('eoX3WGhbPTVKRKnnohmwecsV8FABDwtjdQgHfrZRqG9'),
    //     strategyTknAccount0: new PublicKey('CyuoUL5oXDxCrWTQs9bsn5frzcgTaHxdfet4KPqdvkMg'),
    //     strategyTknAccount1: new PublicKey('7KQuwTi6EhKh6w9gP3ksRbjWzMpEqCHyMbh3fQ7wCBqW'),
    //     strategyLpAccount: new PublicKey('CedhDarJ2X52PZS5ZhPkc4UcdxrrGdxquSSjwdtxhqJ1'),
    //     strategRewardAccount: new PublicKey('6P9sftLGssxM3UN5qHx1MqAEJp5s9TzDW17DAj41agxj'),
    //     strategRewardAccountB: new PublicKey('7KQuwTi6EhKh6w9gP3ksRbjWzMpEqCHyMbh3fQ7wCBqW'),
    //     strategyBorrowCreditAccount0: new PublicKey('42RC5vrBvsFb22uzU2Bc5KyviAFun4vLH3a4tqxBoKvQ'),
    //     strategyBorrowCreditAccount1: new PublicKey('8iCRTpHW2HyXMmpcLgA7ptgzAv33BBKVPU7ZRt4mUQBe'),
    //
    //     stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,
    //
    //     lendingPoolConfig: {
    //         programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
    //         marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
    //         marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
    //         marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
    //
    //         "0": {
    //             tknMint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), // usdc
    //             lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
    //             lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
    //             lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
    //             lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
    //             lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
    //             lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
    //             lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
    //         },
    //         "1":{
    //             tknMint: new PublicKey("Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC"), // larix
    //             lendingPoolInfoAccount: new PublicKey('BGYGxpa2LYJ3ZgpA9tWpKjD2wbuM7c2zwFV9ZMCKRPp6'),
    //             lendingPoolTknAccount: new PublicKey('GTKq5mzS3zutHQmHXs5jkj4oqcFQoav7faSCNYaCymMq'),
    //             lendingPoolFeeAccount: new PublicKey('GTKq5mzS3zutHQmHXs5jkj4oqcFQoav7faSCNYaCymMq'),
    //             lendingPoolShareMint: new PublicKey('Bqwpx4yG8SpeiwTueqK47iF7vpYN1TH8tmajnZH25yb3'),
    //             lendingPoolShareAccount: new PublicKey('GjnUVSbRiewuiMSrp2yNwXfTFNZC8rR9jBXwv62L1bAk'),
    //             lendingPoolCreditMint: new PublicKey('3XVHbuVqySvGyNY8qs9DTCSddCjqqz5XASGcNKM6JCLZ'),
    //             lendingPoolCreditAccount: new PublicKey('EMpchWJSbx5LLXgc9JdpRzpFmyfwhvUQXeJ8NBGR4Z8G'),
    //         }
    //     },
    //
    //     raydiumInfo: {
    //         raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
    //         ammId: new PublicKey('A21ui9aYTSs3CbkscaY6irEMQx3Z59dLrRuZQTt2hJwQ'),
    //         ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
    //         ammOpenOrders: new PublicKey('3eCx9tQqnPUUCgCwoF5pXJBBQSTHKsNtZ46YRzDxkMJf'),
    //         ammTargetOrders: new PublicKey('rdoSiCqvxNdnzuZNUZnsXGQpwkB1jNPctiS194UtK7z'),
    //
    //         ammCoinAccount: new PublicKey('HUW3Nsvjad7jdexKu9PUbrq5G7XYykD9us25JnqxphTA'),
    //         ammPcAccount: new PublicKey('4jBvRQSz5UDRwZH8vE6zqgqm1wpvALdNYAndteSQaSih'),
    //         poolWithdrawQueue: new PublicKey('Dt8fAfftoVcFicC8uHgKpWtdJHA8e4xCPeoVRCfounDy'),
    //         poolTempLpTokenAccount: new PublicKey('FQ3XFCQAEjK1U235pgaB9nRPU1fkQaLjKQiWYYNzB5Fr'),
    //         serumProgramId: SERUM_PROGRAM_ID_V3,
    //         serumMarketId: new PublicKey('DE6EjZoMrC5a3Pbdk8eCMGEY9deeeHECuGFmEuUpXWZm'),
    //         serumBids: new PublicKey('2ngvymBN8J3EmGsVyrPHhESbF8RoBBaLdA4HBAQBTcv9'),
    //         serumAsks: new PublicKey('BZpcoVeBbBytjY6vRxoufiZYB3Te4iMxrpcZykvvdH6A'),
    //         serumEventQueue: new PublicKey('2sZhugKekfxcfYueUNWNsyHuaYmZ2rXsKACVQHMrgFqw'),
    //         serumCoinVault: new PublicKey('JDEsHM4igV84vbH3DhZKvxSTHtswcNQqVHH9RDq1ySzB'),
    //         serumPCVault: new PublicKey('GKU4WhnfYXKGeYxZ3bDuBDNrBGupAnnh1Qhn91eyTcu7'),
    //         serumVaultSigner: new PublicKey('4fGoqGi6jR78dU9TRdL5LvBUPjwnoUCBwxNjfFxcLaCw'),
    //
    //         stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
    //         stakePoolId: new PublicKey('HzxveT6pUMwYByqnScvTbpUv4avzkUDrDpS9D7DToEry'),
    //         stakePoolAuthority: new PublicKey('sCDx3LzV8jPFX1VuRQDAGNKVfiCvhvrv3tJijaXzhXw'),
    //         stakePoolLpAccount: new PublicKey('6PpGF8xRLwpDdVMQHQoBhrrXuUh5Gs4dCMs1DPanpjHM'),
    //         stakePoolRewardAccount: new PublicKey('7tPiMrZB6kct1xNWLtG1jJqJYUJaG8548bEaJsb5HdXq'),
    //         stakePoolRewardAccountB: new PublicKey('DXo3ffHBd69c9tV4wWBtFhc95UZMfYJehGnk3ViifSQ3'),
    //     },
    // },
    //
    // 'ALEPH-USDC': {
    //     protocolVersion: 1,
    //     protocolSubVersion: 2,
    //
    //     programId: lyfRaydiumProgramId,
    //     tknMint0: tokens.usdcToken.mint,
    //     tknMint1: tokens.alephToken.mint,
    //     lpMint: new PublicKey("iUDasAP2nXm5wvTukAHEKSdSXn8vQkRtaiShs9ceGB7"),
    //     rewardMint: tokens.rayToken.mint,
    //     rewardMintB:  tokens.alephToken.mint,
    //
    //     strategyAccount: new PublicKey('7z5qDi6Cj5vBSotFo3cQoojsiN2P84BmmXKgfaPm7RgR'),
    //     strategyAuthority: new PublicKey('EhG4eigC1ouD8gZ7AFFjW6XxcLJXksJGXE3wXkJpqYi3'),
    //     strategyFarmInfo: new PublicKey('4yjdD8cainhZyvCLw13bAbMdgEhVcuXFu6DzKShQPBCb'),
    //     strategyTknAccount0: new PublicKey('5oKNbytN2Wg6PysGcoVCcRcceVsGkdMx49U4M76jVKjd'),
    //     strategyTknAccount1: new PublicKey('6Z4S6WTdk4NFcZrKcT5mpM8S3axmCzAwFp6Q1VJ6ZQXg'),
    //     strategyLpAccount: new PublicKey('2T6hZxWffFRyui9NDMmdCcz234acESvCEK2HFb3ibFoo'),
    //     strategRewardAccount: new PublicKey('8ZcBSrcK4YwHwNCRPzXNdM5WxRU9fTrxMMiZ85RFXZai'),
    //     strategRewardAccountB: new PublicKey('6Z4S6WTdk4NFcZrKcT5mpM8S3axmCzAwFp6Q1VJ6ZQXg'),
    //     strategyBorrowCreditAccount0: new PublicKey('6UaTXWhh5a9w5s9ynbfJJcsKBy57RoA1E54HYTcy2E2D'),
    //     strategyBorrowCreditAccount1: new PublicKey('DNSG2YGE6Y4r9ZhB1vpXwXbybQW4zCSWB5Z6VY24xgCA'),
    //
    //     stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,
    //
    //     lendingPoolConfig: {
    //         programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
    //         marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
    //         marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
    //         marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
    //
    //         "0": {
    //             tknMint: tokens.usdcToken.mint,
    //             lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
    //             lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
    //             lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
    //             lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
    //             lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
    //             lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
    //             lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
    //         },
    //         "1":{
    //             tknMint: tokens.alephToken.mint,
    //             lendingPoolInfoAccount: new PublicKey('E1q2MLRQz5VUKwTChn6rcG3FmJq8wVCRnXFYi8hfsQ9Z'),
    //             lendingPoolTknAccount: new PublicKey('5MZVBTyc7g2th9X6moQ6QCPmEVWFKf3joCRDnNpBuSyB'),
    //             lendingPoolFeeAccount: new PublicKey('5MZVBTyc7g2th9X6moQ6QCPmEVWFKf3joCRDnNpBuSyB'),
    //             lendingPoolShareMint: new PublicKey('28BSc4oqTLzhfRtTy6KDJu2N9PyxLHmD66hbd5fU9PYR'),
    //             lendingPoolShareAccount: new PublicKey('DXCnQvvJTszWBLJHky9KRryZya857a6iNVgL6ctcwuAr'),
    //             lendingPoolCreditMint: new PublicKey('2ohhYEUqjMZzt14h9PJYxSv6BmG3ohpP1wtVzGYvtA81'),
    //             lendingPoolCreditAccount: new PublicKey('BXwhcak89BXYj95FK4JJqg66wdPT4J42BXF1PmcR7mWH'),
    //         }
    //     },
    //     raydiumInfo: {
    //         raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
    //         ammId: new PublicKey('GDHXjn9wF2zxW35DBkCegWQdoTfFBC9LXt7D5ovJxQ5B'),
    //         ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
    //         ammOpenOrders: new PublicKey('AtUeUK7MZayoDktjrRSJAFsyPiPwPsbAeTsunM5pSnnK'),
    //         ammTargetOrders: new PublicKey('FMYSGYEL1CPYz8cpgAor5jV2HqeEQRDLMEggoz6wAiFV'),
    //
    //         ammCoinAccount: new PublicKey('BT3QMKHrha4fhqpisnYKaPDsv42XeHU2Aovhdu5Bazru'),
    //         ammPcAccount: new PublicKey('9L4tXPyuwuLhmtmX4yaRTK6TB7tYFNHupeENoCdPceq'),
    //         poolWithdrawQueue: new PublicKey('4nRbmEUp7DQroG71jXv6cJjrhnh91ePdPhzmBSjinwB8'),
    //         poolTempLpTokenAccount: new PublicKey('9JdpGvmo6aPZYf4hkiZNUjceXgd2RtR1fJgvjuoAuhsM'),
    //         serumProgramId: SERUM_PROGRAM_ID_V3,
    //         serumMarketId: new PublicKey('GcoKtAmTy5QyuijXSmJKBtFdt99e6Buza18Js7j9AJ6e'),
    //         serumBids: new PublicKey('HmpcmzzajDvhFSXb4pmJo5mb23zW8Cj9FEeB3hVT78jV'),
    //         serumAsks: new PublicKey('8sfGm6jsFTAcb4oLuqMKr1xNEBd5CXuNPAKZEdbeezA'),
    //         serumEventQueue: new PublicKey('99Cd6D9QnFfTdKpcwtoF3zAZdQAuZQi5NsPMERresj1r'),
    //         serumCoinVault: new PublicKey('EBRqW7DaUGFBHRbfgRagpSf9jTSS3yp9MAi3RvabdBGz'),
    //         serumPCVault: new PublicKey('9QTMfdkgPWqLriB9J7FcYvroUEqfw6zW2VCi1dAabdUt'),
    //         serumVaultSigner: new PublicKey('HKt6xFufxTBBs719WQPbro9t1DfDxffurxFhTPntMgoe'),
    //
    //         stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
    //         stakePoolId: new PublicKey('JAP8SFagJBm6vt2LoFGNeSJ1hKDZ2p3yXb3CvBx11How'),
    //         stakePoolAuthority: new PublicKey('DVtR63sAnJPM9wdt1hYBqA5GTyFzjfcfdLTfsSzV85Ss'),
    //         stakePoolLpAccount: new PublicKey('feCzxSvVX4EboJV4cubjqoPTK41noaHUanz8ZNJmiBp'),
    //         stakePoolRewardAccount: new PublicKey('4mAhgUY8XGMY4743wuzVbLw7d5bqqTaxME8jmbC2YfH4'),
    //         stakePoolRewardAccountB: new PublicKey('3sGDa8ir8GrkKbnBH6HP63JaYSs7nskmmVHpF2vuzaZr'),
    //     },
    // },
    //
    // 'COPE-USDC': {
    //     protocolVersion: 1,
    //     protocolSubVersion: 2,
    //
    //     programId: lyfRaydiumProgramId,
    //     tknMint0: tokens.usdcToken.mint,
    //     tknMint1: tokens.copeToken.mint,
    //     lpMint: new PublicKey("Cz1kUvHw98imKkrqqu95GQB9h1frY8RikxPojMwWKGXf"),
    //     rewardMint: tokens.rayToken.mint,
    //     rewardMintB:  tokens.copeToken.mint,
    //
    //     strategyAccount: new PublicKey('AXDf3DDw86fPKHn48saGdkzmkcxAWJSootLKkiEDjPsu'),
    //     strategyAuthority: new PublicKey('8CGnFY92cWPXcdp2Bbuqu1hkAVC7EBubLci6jVELkPUr'),
    //     strategyFarmInfo: new PublicKey('Ci1nrz1i3SNV5BQPtwec5JrfXSc3K7VJqGqFzFeyvznE'),
    //     strategyTknAccount0: new PublicKey('HiMxErRrVBBPM3UhMfMGzkxg94AhKBs2WkKQzTEwMPDF'),
    //     strategyTknAccount1: new PublicKey('CCxb5fb1aDC3HUfA49DNYrX3FfWNzTbZ7NSUPLdr74ZP'),
    //     strategyLpAccount: new PublicKey('D3FxBHHbEYAZfLT88UpudRAbHYCKgXUqANEaPmCP69nP'),
    //     strategRewardAccount: new PublicKey('9wwhxQUcy1Y98vXVH3n8ueyAb7iGT1KiTHFxA6FLJgki'),
    //     strategRewardAccountB: new PublicKey('CCxb5fb1aDC3HUfA49DNYrX3FfWNzTbZ7NSUPLdr74ZP'),
    //     strategyBorrowCreditAccount0: new PublicKey('ALtcptKvidHeavrMPCGAwMd77RTTTN3DtgHz24TQYGsG'),
    //     strategyBorrowCreditAccount1: new PublicKey('2XK91raTcdSSVyqXqcCy4aPZ5KKGWLz28ocTMLASXGUJ'),
    //
    //     stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,
    //
    //     lendingPoolConfig: {
    //         programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
    //         marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
    //         marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
    //         marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
    //
    //         "0": {
    //             tknMint: tokens.usdcToken.mint,
    //             lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
    //             lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
    //             lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
    //             lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
    //             lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
    //             lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
    //             lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
    //         },
    //         "1":{
    //             tknMint: tokens.copeToken.mint,
    //             lendingPoolInfoAccount: new PublicKey('Hmde6PfS3wv2wi1rePBTFSjMqpugPpBFc8HLiYfHwsTB'),
    //             lendingPoolTknAccount: new PublicKey('BZwinxfYXhHgDc61AU9YFv7VkcuffVcQqBXXms8JAovX'),
    //             lendingPoolFeeAccount: new PublicKey('BZwinxfYXhHgDc61AU9YFv7VkcuffVcQqBXXms8JAovX'),
    //             lendingPoolShareMint: new PublicKey('GLvCYLcwQPr6CcJQKZSe2QoXj6tUiD2PxMPt9FJKSx7K'),
    //             lendingPoolShareAccount: new PublicKey('59RQbAq1QVSeLKvjDrokxrH86oq7tVF2rTW4ydBU3KB4'),
    //             lendingPoolCreditMint: new PublicKey('4HrgJueR9RHvmsyFfZcjtjg9Q7Q6ncrU1CGQqmeb9Y3a'),
    //             lendingPoolCreditAccount: new PublicKey('DtgHkAtvqx7uzvba1518c2CCpaU5jcsaZtiAydHvnFN8'),
    //         }
    //     },
    //     raydiumInfo: {
    //         raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
    //         ammId: new PublicKey('DiWxV1SPXPNJRCt5Ao1mJRAxjw97hJVyj8qGzZwFbAFb'),
    //         ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
    //         ammOpenOrders: new PublicKey('jg8ayFZLH2cEUJULUirWy7wNggN1eyRnTMt6EjbJUun'),
    //         ammTargetOrders: new PublicKey('8pE4fzFzRT6aje7B3hYHXrZakeEqNF2kFmJtxkrxUK9b'),
    //
    //         ammCoinAccount: new PublicKey('FhjBg8vpVgsiW9oCUxujqoWWSPSRvnWNXucEF1G1F39Z'),
    //         ammPcAccount: new PublicKey('Dv95skm7AUr33x1p2Bu5EgvE3usB1TxgZoxjBe2rpfm6'),
    //         poolWithdrawQueue: new PublicKey('4An6jy1JocXGUjayXqVTx1jvs79o8LgsRk3VvmRgXxaq'),
    //         poolTempLpTokenAccount: new PublicKey('57hiWKd47VHVD7y8BenqnakSdgQNBvyUrkSpf9BDP6UQ'),
    //         serumProgramId: SERUM_PROGRAM_ID_V3,
    //         serumMarketId: new PublicKey('6fc7v3PmjZG9Lk2XTot6BywGyYLkBQuzuFKd4FpCsPxk'),
    //         serumBids: new PublicKey('FLjCjU5wLUsqF6FeYJaH5JtTTFSTZzTCingxN1uyr9zn'),
    //         serumAsks: new PublicKey('7TcstD7AdWqjuFoRVK24zFv66v1qyMYDNDT1V5RNWKRz'),
    //         serumEventQueue: new PublicKey('2dQ1Spgc7rGSuE1t3Fb9RL7zvGc7F7pH9XwJ46u3QiJr'),
    //         serumCoinVault: new PublicKey('2ShBow4Bof4dkLjx8VTRjLXXvUydiBNF7bHzDaxPjpKq'),
    //         serumPCVault: new PublicKey('EFdqJhawpCReiK2DcrbbUUWWc6cd8mqgZm5MSbQ3TR33'),
    //         serumVaultSigner: new PublicKey('A6q5h5Wx9iqeoVsvYWA7xofUcKx6XUPPab8BTVrW91Bs'),
    //
    //         stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
    //         stakePoolId: new PublicKey('AxVvbT9fDFEkmdLwKUJRY5HsG2RXAZbe1dRAgJ2bDDwg'),
    //         stakePoolAuthority: new PublicKey('3n1Vdmqu1MBUpBYMpYbpJAVFv4MeNMEa82waruLy7BDu'),
    //         stakePoolLpAccount: new PublicKey('BHLzrd5MgQy4NgmUsn542yXRZWkz1iV5bfWg8s8D4tVL'),
    //         stakePoolRewardAccount: new PublicKey('7nGY6xHCUR2MxJnHT1qvArRUEnpo2DsGGf6Pdu3tt9gv'),
    //         stakePoolRewardAccountB: new PublicKey('6ezx1EivkxsJcZLYhSJFLc3nUs25iyubf8PPyRNEX3pL'),
    //     },
    // },
    //
    'LIKE-USDC': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.likeToken.mint,
        lpMint: new PublicKey("cjZmbt8sJgaoyWYUttomAu5LJYU44ZrcKTbzTSEPDVw"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.likeToken.mint,

        strategyAccount: new PublicKey('GXxE5ivoV14V25NucyswDyFE8sDk4rL65EU4QgykSWSC'),
        strategyAuthority: new PublicKey('FbLWAfPtyx3BXDDTcDoq9nWRoXobVXG7fLcAZHLCvhGG'),
        strategyFarmInfo: new PublicKey('GDBK6rX3dcXeRwnuUtRo1wddAaJo9JzwuZizm7Y79xq5'),
        strategyTknAccount0: new PublicKey('4YWyvGc2HPYLLwQzZRgC6F57FmbDLJuTbNDGJupWSCku'),
        strategyTknAccount1: new PublicKey('8W8geuou6n1LuNKWdqaHwCWMCYo1HyXCEqH9k8PK9kWN'),
        strategyLpAccount: new PublicKey('4ELDzeD16C7WFwhZuu41mhNzMMvApCY8mXNSz4gv1XEp'),
        strategRewardAccount: new PublicKey('GsMCi1EXaHTYSHxqZLwhRaWpF2BDrH1SQWprBty1LiRM'),
        strategRewardAccountB: new PublicKey('8W8geuou6n1LuNKWdqaHwCWMCYo1HyXCEqH9k8PK9kWN'),
        strategyBorrowCreditAccount0: new PublicKey('FFweKUeCJbwYjHaDZDxF888VzZtGH1NXV3tdc63pifg7'),
        strategyBorrowCreditAccount1: new PublicKey('7582Sr53BCjjZ4GyeSQBv6MTLThVjpF4k6PNM2gmfPVQ'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.likeToken.mint,
                lendingPoolInfoAccount: new PublicKey('Dca4U2Z1FsmTxCprP4mno86TyU16MKNPXMaDL1Ss91PG'),
                lendingPoolTknAccount: new PublicKey('FhMA9GPpUJ47hVBxGEaDLFJD1tAkdKiJp6pGh5M8maU7'),
                lendingPoolFeeAccount: new PublicKey('FhMA9GPpUJ47hVBxGEaDLFJD1tAkdKiJp6pGh5M8maU7'),
                lendingPoolShareMint: new PublicKey('FwaGzJTkSNzut1DtBTynyytyye53Gz1mnv25PZGMJZVj'),
                lendingPoolShareAccount: new PublicKey('4wx2c4zPceth9sgSVuyokks7bKLoWzQJCix7CVuz3rNf'),
                lendingPoolCreditMint: new PublicKey('5hhMrMJuwu8jfRC2dfru6813TnFQvY4dRh47UZibBWTb'),
                lendingPoolCreditAccount: new PublicKey('DqYb1w1aN1ufwHRemY2oJ21eMNvoio8kykq1PhQARJZ5'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey('GmaDNMWsTYWjaXVBjJTHNmCWAKU6cn5hhtWWYEZt4odo'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('Crn5beRFeyj4Xw13E2wdJ9YkkLLEZzKYmtTV4LFDx3MN'),
            ammTargetOrders: new PublicKey('7XjS6MrvBRi9JeFWBMAYPaKhKgR3b7xnVdYDBkFb4CXR'),

            ammCoinAccount: new PublicKey('8LoHX6f6bMdQVs4mThoH2KwX2dQDSkqVFADi4ZjDQv9T'),
            ammPcAccount: new PublicKey('2Fwm8M8vuPXEXxvKz98VdawDxsK9W8uRuJyJhvtRdhid'),
            poolWithdrawQueue: new PublicKey('CW9zJ2JbBekkdd5SdvPapPcbziR8d1UHBzW7nNn1W3ga'),
            poolTempLpTokenAccount: new PublicKey('FVHsnC1nhwMcrAzFwcK4dgUtDdYFM1VrTJ8Rp8Mb1LkY'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('3WptgZZu34aiDrLMUiPntTYZGNZ72yT1yxHYxSdbTArX'),
            serumBids: new PublicKey('GzHpnQSfS7KdqLKgiEEP7pkYnwEBz9zaE7De2CjmCrNV'),
            serumAsks: new PublicKey('FpEBAT9qP1so4ASUTiEWxyXH2SJvgoBYUiZ1AbPimcS7'),
            serumEventQueue: new PublicKey('CUMDMV9KtE22RUZECUNHxiq7FmUiRusyKa1rHUJfRptq'),
            serumCoinVault: new PublicKey('Dd9F1fugQj2xtduyNvFS5TtxP9vKnuxVMcrPsHFnLyqp'),
            serumPCVault: new PublicKey('BnXXu8kLUXrwg3MpcVRVPLZw9bpX2mLd95qtCMnSUtu7'),
            serumVaultSigner: new PublicKey('MKCHeoqNGWU8TJBkdF1M76nMUteJCwuBRUJfCtR3iV7'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('BRM5bdX2mjmFGg2RAent1Whd61o9asQD16BXsC6QvEni'),
            stakePoolAuthority: new PublicKey('9rThpjxEgNR5xi2z2QgXenS2RwRrrN1GqrudegT32Ygy'),
            stakePoolLpAccount: new PublicKey('FzVu8n4UCf3o1KH4X8khM9KgKA96dJQdQMPtLvmbHyNi'),
            stakePoolRewardAccount: new PublicKey('3G1cbktUU79CT3zskP16VYmEhwVQq2RYxVWV7fcjmkTX'),
            stakePoolRewardAccountB: new PublicKey('2Ks41qfN2GZffbd1cqrNGuXJYJbShHhz6aHQvq8SaYYr'),
        },
    },

    'SRM-USDC': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.srmToken.mint,
        lpMint: new PublicKey("9XnZd82j34KxNLgQfz29jGbYdxsYznTWRpvZE3SRE7JG"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('DFKMUkkSRwuXfUmfVLg9p2kX9wakNXkh7uTJRHqUpSRZ'),
        strategyAuthority: new PublicKey('7HU4jfPHTEbT6eeDtsUPFoFnZgYFyyVv4PCFLFZX4buv'),
        strategyFarmInfo: new PublicKey('A5uSmsF5FFP1GkKy9zsnNJtnvQjJjj6a2Gmymorkbq3j'),
        strategyTknAccount0: new PublicKey('AkDrEi3H9TDyoF2pBEzHE4yYvVnFU3eXJ2SENvhuKY7w'),
        strategyTknAccount1: new PublicKey('75hLxvW4i3LZUYerbdHQxcJtX66LTyep3WEUFst2PgAk'),
        strategyLpAccount: new PublicKey('JAqxUuDhGpFDdENRA6FnjmwemotHMTpfxBzvkmXUgmVv'),
        strategRewardAccount: new PublicKey('Ej6Zm96FBDRdoS6ucgExuPcgGz3sKgDuYGvXfkxsuEM1'),
        strategRewardAccountB: new PublicKey('75hLxvW4i3LZUYerbdHQxcJtX66LTyep3WEUFst2PgAk'),
        strategyBorrowCreditAccount0: new PublicKey('Edyn48UCeTLery1fJmjA7oyZVLUWfnjdsnV9ADnhnrQT'),
        strategyBorrowCreditAccount1: new PublicKey('6GwEninqXy37JrTjNJHz5WwA91VRQPN8eiXB36uE2i7C'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.srmToken.mint,
                lendingPoolInfoAccount: new PublicKey("B1zB1EuTjnFPLdwySeBYhzeAf3h9buWLbDoG7AHcUTMF"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("FLQtBThLEVvhXdKqq2CREL8sFt8jAFS8szm4HaMYqmJk"),
                lendingPoolFeeAccount: new PublicKey("FdSBYwMEfy21H3k64cvYdir3mxzmnZotiYUsC5iPPoxM"),
                lendingPoolShareMint: new PublicKey("6CZhCFwA7hbqDEoVUQdFpHaCGQU7fSSwhaJWdG4DmsQ6"),
                lendingPoolShareAccount: new PublicKey("C3EjtH3hVuLrU3j1y5ArMFRbAhxFf5hXNfk3b9SU91qN"),
                lendingPoolCreditMint: new PublicKey("DqKuxgMxLPDCXtoQzLG1p85S2i3tP3EaeUVDAw7P8Nt4"),
                lendingPoolCreditAccount: new PublicKey("Ednqn9Zo5HpDX2DRmCWu6x46ZXnHNmTmrq9G8hrTuBnz"),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey('27bysJaX5eu5Urb5kftR66otiVc6DKK7TnifKwnpNzYu'),
            stakePoolAuthority: new PublicKey('HAWwtFc4MFNSXFyQbUZd2GefSwZLntCiumt1D6XM8jfk'),
            stakePoolLpAccount: new PublicKey('HVEm5BG4jMHtwgrUtuiC9K17bjp9CjFpgqmzVABmzLxr'),
            stakePoolRewardAccount: new PublicKey('9gs6XnKs3RMMSSQAZm3VCbRpoNmPMrGaQQGMmRKjPeSU'),
            stakePoolRewardAccountB: new PublicKey('BsuQ3XCCapopam8byEzHzazyxcRn5dCT3UX9kUzozhw'),
        },
    },

    'whETH-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.whethToken.mint,
        lpMint: new PublicKey("3529SBnMCDW3S3xQ52aABbRHo7PcHvpQA4no8J12L5eK"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('AWHou4vAwgWPQQMtFDRmSvgDLhyPapgW5hMvd7MkPRmw'),
        strategyAuthority: new PublicKey('AMpwpkN7ggwAkbPmz7PX1yi96dTkNWDnqA9zXKHEf1r5'),
        strategyFarmInfo: new PublicKey('9A9TKP673rDs4UAdkP64EwKERmHqkew5SnoucEFUD6B5'),
        strategyTknAccount0: new PublicKey('HZbMgtmXZ1xg4iTqQXDkD5u3PpSSdUHGUuVbyMYfKe5c'),
        strategyTknAccount1: new PublicKey('9UMGqVWAE9kgBjC8qWDQmXCabePQt3FAkr25BQyTd7RR'),
        strategyLpAccount: new PublicKey('E5yV8WfnzNbij1YNRuUPfZo6Mk9e5MiS3QCPLKD745oM'),
        strategRewardAccount: new PublicKey('3NypFkTmD9BGEjnW2URjv2fVvaQedSauetDCqrYTtRNG'),
        strategRewardAccountB: new PublicKey('3cHQc9myUQvKCVVKURwAeRJi6D2ktyw2immP3fZq3J4J'),
        strategyBorrowCreditAccount0: new PublicKey('mS1cPzsEiLy8XTEMWmVWBipWFvEv9KKQjpVguVN8Dop'),
        strategyBorrowCreditAccount1: new PublicKey('MsYP1i3JPKSuPZUUvUr9rG5wi2AesNH3sQ9YvXP4g9S'),

        strategyRewardsSwapTarget: new PublicKey("HZbMgtmXZ1xg4iTqQXDkD5u3PpSSdUHGUuVbyMYfKe5c"),
        strategyRewardsSwapTargetB: new PublicKey("HZbMgtmXZ1xg4iTqQXDkD5u3PpSSdUHGUuVbyMYfKe5c"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.whethToken.mint,
                lendingPoolInfoAccount: new PublicKey('EEokU6r9bBdTz1umHjGhkjgfikARsJzJBXhYxnTmN4Xk'),
                lendingPoolTknAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolFeeAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolShareMint: new PublicKey('Hk8b6i2C7PxFBPdd1TCrGssuZpCDEg4fh8yFuyHNJuJe'),
                lendingPoolShareAccount: new PublicKey('FNG4A4GWF1EsQVEjNrQMRT9Dr3H28TycQabtnsQF1MiD'),
                lendingPoolCreditMint: new PublicKey('7f7mU3tQvxD9t3f5ckhxcGSdwqoHHdWrJg43HXiUFWri'),
                lendingPoolCreditAccount: new PublicKey('7LvrwstXyshwVn7BPDgjR8Cndersy9GzbbGhyHwQcX3W'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("6iwDsRGaQucEcfXX8TgDW1eyTfxLAGrypxdMJ5uqoYcp"),
            ammTargetOrders: new PublicKey("EGZL5PtEnSHrNmeoQF64wXG6b5oqiTArDvAQuSRyomX5"),


            ammCoinAccount: new PublicKey("DVWRhoXKCoRbvC5QUeTECRNyUSU1gwUM48dBMDSZ88U"),
            ammPcAccount: new PublicKey("HftKFJJcUTu6xYcS75cDkm3y8HEkGgutcbGsdREDWdMr"),
            poolWithdrawQueue: new PublicKey("A443y1KRAvKdK8yLJ9H29mgwuY56FAq1KvJmkcPCn47B"),
            poolTempLpTokenAccount: new PublicKey("jYvXX2z6USGtBSgJiPYWM9XZTBoiHJGPRGeQ9AUX98T"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("8Gmi2HhZmwQPVdCwzS7CM66MGstMXPcTVHA7jF19cLZz"),
            serumBids: new PublicKey("3nXzH1gYKM1FKdSLHM7GCRG76mhKwyDjwinJxAg8jjx6"),
            serumAsks: new PublicKey("b3L5dvehk48X4mDoKzZUZKA4nXGpPAMFkYxHZmsZ98n"),
            serumEventQueue: new PublicKey("3z4QQPFdgNSxazqEAzmZD5C5tJWepczimVqWak2ZPY8v"),
            serumCoinVault: new PublicKey("8cCoWNtgCL7pMapGZ6XQ6NSyD1KC9cosUEs4QgeVq49d"),
            serumPCVault: new PublicKey("C7KrymKrLWhCsSjFaUquXU3SYRmgYLRmMjQ4dyQeFiGE"),
            serumVaultSigner: new PublicKey("FG3z1H2BBsf5ekEAxSc1K6DERuAuiXpSdUGkYecQrP5v"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("8JJSdD1ca5SDtGCEm3yBbQKek2FvJ1EbNt9q2ET3E9Jt"),
            stakePoolAuthority: new PublicKey("DBoKA7VTfnQDj7knPTrZcg6KKs5WhsKsVRFVjBsjyobs"),
            stakePoolLpAccount: new PublicKey("2ucKrVxYYCfWC6yRk3R7fRbQ5Mjz81ciEgS451TGq2hg"),
            stakePoolRewardAccount: new PublicKey("3nhoDqudHBBedE9CuUqnydrWWiMFLKcZf3Ydc9zbAFet"),
            stakePoolRewardAccountB: new PublicKey("B4LA1grBYY9CE3W8sG9asR7Pi2a6eSt2A8RHcXXKJ1UM"),
        },

        // rewardsAmmInfo: {
        //     // RAY -> USDC
        //     direction: 1,
        //
        //     ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
        //     ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
        //     ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
        //     ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),
        //
        //     ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
        //     ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
        //     poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
        //     poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
        //     serumProgramId: SERUM_PROGRAM_ID_V3,
        //     serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
        //     serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
        //     serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
        //     serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
        //     serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
        //     serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
        //     serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        // },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'whETH-SOL':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.solToken.mint,
        tknMint1: tokens.whethToken.mint,
        lpMint: new PublicKey("3hbozt2Por7bcrGod8N7kEeJNMocFFjCJrQR16TQGBrE"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('9tai5X1Bh6bAMskYcqmiQSr2WdShksafA37Acz8kpfzd'),
        strategyAuthority: new PublicKey('Bm58fk3qwk4buySWS8ux5VyK5y52swqeZrWKZYV9KT2k'),
        strategyFarmInfo: new PublicKey('Azt1tk8qwaekUcNye8FkQ1WVJL3LhmbtM45aUfnSDgUM'),
        strategyTknAccount0: new PublicKey('BrFSNEpgjEyhXoPJBQcUboWkoDugmEgkUy214kH5hXRk'),
        strategyTknAccount1: new PublicKey('F5tDJmQH8THzB27fbDDe45JzovBmtFsSMUurzygm9J3y'),
        strategyLpAccount: new PublicKey('3UgQheZqqmbyxKc7p7vUUsMeNdTE6F797nKVWDKeM5q3'),
        strategRewardAccount: new PublicKey('D2wRaoNWLQi4fDbMnqzGbfkEtCjKAiHs4sBia72vS9WA'),
        strategRewardAccountB: new PublicKey('G4cZjeVwaTdBf6RQfRCk56N1EyPX6GEDZr6FStgC66um'),
        strategyBorrowCreditAccount0: new PublicKey('6WKjAnBbbCpJJhSV5dh5wVBQ1v9Mj7c9ucZ4pPxcrnWB'),
        strategyBorrowCreditAccount1: new PublicKey('E3AL2MoHdSh9pCWSEB2h9eYaYfgrGNwk3nLTKsM8H2Hd'),

        strategyRewardsSwapTarget: new PublicKey("BrFSNEpgjEyhXoPJBQcUboWkoDugmEgkUy214kH5hXRk"),
        strategyRewardsSwapTargetB: new PublicKey("BrFSNEpgjEyhXoPJBQcUboWkoDugmEgkUy214kH5hXRk"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.solToken.mint,
                lendingPoolInfoAccount: new PublicKey("EnZC8MB6QLTxwN1LNqCXYC7XMpvXqitnYQPf5y5AcQRn"),
                lendingMarketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
                lendingPoolTknAccount: new PublicKey("GiJwrxQW5NQWWAva4rnDMXwHxfrhyUzwMX5to1pmCCgF"),
                lendingPoolFeeAccount: new PublicKey("2BDZqoVKAX3PJKeZJytjk7oEpbUu3jvdgdi6tA8VusnY"),
                lendingPoolShareMint: new PublicKey("92Zst3rEoJsyZUW2yNc2811GtkBwFrm3tqgxMTtFWuSB"),
                lendingPoolShareAccount: new PublicKey("Hyi1jMgc9MMEZyaG9ziL2PvT7zbeRNKhb5K1kj9bxz4x"),
                lendingPoolCreditMint: new PublicKey("7x61NrCzeekHwgW5Nk4afMg2sxjMK6RyMkx8tCzzX4qG"),
                lendingPoolCreditAccount: new PublicKey("WuPCgCuyLSXatdjyWqkGjCPSQFgKLwcfsNR9fDq3hVL"),
            },
            "1":{
                tknMint: tokens.whethToken.mint,
                lendingPoolInfoAccount: new PublicKey('EEokU6r9bBdTz1umHjGhkjgfikARsJzJBXhYxnTmN4Xk'),
                lendingPoolTknAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolFeeAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolShareMint: new PublicKey('Hk8b6i2C7PxFBPdd1TCrGssuZpCDEg4fh8yFuyHNJuJe'),
                lendingPoolShareAccount: new PublicKey('FNG4A4GWF1EsQVEjNrQMRT9Dr3H28TycQabtnsQF1MiD'),
                lendingPoolCreditMint: new PublicKey('7f7mU3tQvxD9t3f5ckhxcGSdwqoHHdWrJg43HXiUFWri'),
                lendingPoolCreditAccount: new PublicKey('7LvrwstXyshwVn7BPDgjR8Cndersy9GzbbGhyHwQcX3W'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,

            ammId: new PublicKey("4yrHms7ekgTBgJg77zJ33TsWrraqHsCXDtuSZqUsuGHb"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("FBU5FSjYeEZTbbLAjPCfkcDKJpAKtHVQUwL6zDgnNGRF"),
            ammTargetOrders: new PublicKey("2KjKkci5zpGa6orKCu3ov4eFSB2aLR2ZdAYvVnaJxJjd"),


            ammCoinAccount: new PublicKey("5ushog8nHpHmYVJVfEs3NXqPJpne21sVZNuK3vqm8Gdg"),
            ammPcAccount: new PublicKey("CWGyCCMC7xmWJZgAynhfAG7vSdYoJcmh27FMwVPsGuq5"),
            poolWithdrawQueue: new PublicKey("BzTWSVgYaqHvUcuPZKD4yKTDR2xCDtZFb1bqkwfoPHZJ"),
            poolTempLpTokenAccount: new PublicKey("Dfvj9bmde56ZWgxDsrADywZhctejEG2WTbnYa7P5SAhk"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("7gtMZphDnZre32WfedWnDLhYYWJ2av1CCn1RES5g8QUf"),
            serumBids: new PublicKey("4Z6iBaVyCusvALJShz39yDY98jwPn6T1SsKaiLE3k5du"),
            serumAsks: new PublicKey("J6ULjQv2xpifRQQAKNYAtEGapgAsAA7vNhhRU57Law6m"),
            serumEventQueue: new PublicKey("4tMSdiQWSGJbaz4UCdHQpqczxCJfLvBNWtskGbAnFgBz"),
            serumCoinVault: new PublicKey("5F5W8nkQpXnb5ewS2GiUCuWAiamZpzGEMBciwaZ72frr"),
            serumPCVault: new PublicKey("CdWhLReMv1A4BJQkogvMwxVVop6agSW22YzQBzKUCS1y"),
            serumVaultSigner: new PublicKey("GRiN6BiHeaa2wrFEpqzR397d6RqefCSRhnQVsVscwT3r"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("Gi3Z6TXeH1ZhCCbwg6oJL8SE4LcmxmGRNhhfA6NZhwTK"),
            stakePoolAuthority: new PublicKey("HoUqzaqKTueo1DMcVcTUgnc79uoiF5nRoD2iNGrVhkei"),
            stakePoolLpAccount: new PublicKey("9cTdfPLSkauS8Ys848Wz4pjfFvQjsmJpVTUnYXffkubb"),
            stakePoolRewardAccount: new PublicKey("2MMFGZGEjQRovNeNtj1xN9redsVLYTMVcXzFTLQCw6ue"),
            stakePoolRewardAccountB: new PublicKey("6DhjnWKLbxnDSFZApaVJXCY2wbzgt2mYhvW3yBreaYsY"),
        },

        rewardsAmmInfo: {
            // RAY -> SOL
            direction: 1,

            ammId: new PublicKey("AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("6Su6Ea97dBxecd5W92KcVvv6SzCurE2BXGgFe9LNGMpE"),
            ammTargetOrders: new PublicKey("5hATcCfvhVwAjNExvrg8rRkXmYyksHhVajWLa46iRsmE"),


            ammCoinAccount: new PublicKey("Em6rHi68trYgBFyJ5261A2nhwuQWfLcirgzZZYoRcrkX"),
            ammPcAccount: new PublicKey("3mEFzHsJyu2Cpjrz6zPmTzP7uoLFj9SbbecGVzzkL1mJ"),
            poolWithdrawQueue: new PublicKey("FSHqX232PHE4ev9Dpdzrg9h2Tn1byChnX4tuoPUyjjdV"),
            poolTempLpTokenAccount: new PublicKey("87CCkBfthmyqwPuCDwFmyqKWJfjYqPFhm5btkNyoALYZ"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("C6tp2RVZnxBPFbnAsfTjis8BN9tycESAT4SgDQgbbrsA"),
            serumBids: new PublicKey("C1nEbACFaHMUiKAUsXVYPWZsuxunJeBkqXHPFr8QgSj9"),
            serumAsks: new PublicKey("4DNBdnTw6wmrK4NmdSTTxs1kEz47yjqLGuoqsMeHvkMF"),
            serumEventQueue: new PublicKey("4HGvdannxvmAhszVVig9auH6HsqVH17qoavDiNcnm9nj"),
            serumCoinVault: new PublicKey("6U6U59zmFWrPSzm9sLX7kVkaK78Kz7XJYkrhP1DjF3uF"),
            serumPCVault: new PublicKey("4YEx21yeUAZxUL9Fs7YU9Gm3u45GWoPFs8vcJiHga2eQ"),
            serumVaultSigner: new PublicKey("7SdieGqwPJo5rMmSQM9JmntSEMoimM4dQn7NkGbNFcrd"),
        },

        rewardsAmmInfoB: {
            // SRM -> SOL
            direction: 1,

            ammId: new PublicKey("EvWJC2mnmu9C9aQrsJLXw8FhUcwBzFEUQsP1E5Y6a5N7"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("9ot4bg8aT2FRKfiRrM2fSPHEr7M1ihBqm1iT4771McqR"),
            ammTargetOrders: new PublicKey("AfzGtG3XnMixxJTx2rwoWLXKVaWoFMhsMeYo929BrUBY"),


            ammCoinAccount: new PublicKey("BCNYwsnz3yXvi4mY5e9w2RmZvwUW3pefzYQ4tsoNdDhp"),
            ammPcAccount: new PublicKey("7BXPSUXeBVqJGyxW3yvkNxnJjYHuC8mnhyFCDp2abAs6"),
            poolWithdrawQueue: new PublicKey("HYo9FfBpm8NCpR8qYMGYFZNqzKkXDRFACLxu8PXCCDc4"),
            poolTempLpTokenAccount: new PublicKey("AskrcNfMDKT5c65AYeuEBW6mfMXfT3SG4nDCDRAyEnad"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("jyei9Fpj2GtHLDDGgcuhDacxYLLiSyxU4TY7KxB2xai"),
            serumBids: new PublicKey("4ZTJfhgKPizbkFXNvTRNLEncqg85yJ6pyT7NVHBAgvGw"),
            serumAsks: new PublicKey("7hLgwZhHD1MRNyiF1qfAjfkMzwvP3VxQMLLTJmKSp4Y3"),
            serumEventQueue: new PublicKey("nyZdeD16L5GxJq7Pso8R6KFfLA8R9v7c5A2qNaGWR44"),
            serumCoinVault: new PublicKey("EhAJTsW745jiWjViB7Q4xXcgKf6tMF7RcMX9cbTuXVBk"),
            serumPCVault: new PublicKey("HFSNnAxfhDt4DnmY9yVs2HNFnEMaDJ7RxMVNB9Y5Hgjr"),
            serumVaultSigner: new PublicKey("6vBhv2L33KVJvAQeiaW3JEZLrJU7TtGaqcwPdrhytYWG"),
        }
    },

    'weSUSHI-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.wesushiToken.mint,
        lpMint: new PublicKey("3wVrtQZsiDNp5yTPyfEzQHPU6iuJoMmpnWg6CTt4V8sR"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('4MZ3ow4kxVrAtCgmrg1FXxiwbowthBC79Gh7spQwbepx'),
        strategyAuthority: new PublicKey('Fb972AcVZCBNN8myxjLNsgjbuyoBvh95TD23Xk27d9Qn'),
        strategyFarmInfo: new PublicKey('5q489pZrWfCVC8a9mHzp3H7q7N1RDV6xBkktbBLCR5Mn'),
        strategyTknAccount0: new PublicKey('G2xMhFMak2EVGuSNDvBJsPxBkUYb8hqnT2SZvoSDhtyJ'),
        strategyTknAccount1: new PublicKey('4aEKcfFWgsEeh8RuM9pDSoCNAnh4XFtYC1nFog6XBK3v'),
        strategyLpAccount: new PublicKey('7KvuRFhzELwCZ5r46MukgVuoQAMQVmaQvDXMadYc2BR1'),
        strategRewardAccount: new PublicKey('4C9K5jVK24v77nVEAx1oc4ZbEf8A9FdRfiTWkLk7LGyq'),
        strategRewardAccountB: new PublicKey('2f2KXaFKucwkjC258PLj58X995YKAaG9R8TdkHYehdsc'),
        strategyBorrowCreditAccount0: new PublicKey('8ckW6WSGgugJRgu9nQhqZxHuJCAWLmhKuZT4MWfGMVqT'),
        strategyBorrowCreditAccount1: new PublicKey('M5H7zEvM64ctYdTFtEb6wTTBrD23vXDdvN3xrYhGxm8'),

        strategyRewardsSwapTarget: new PublicKey("G2xMhFMak2EVGuSNDvBJsPxBkUYb8hqnT2SZvoSDhtyJ"),
        strategyRewardsSwapTargetB: new PublicKey("G2xMhFMak2EVGuSNDvBJsPxBkUYb8hqnT2SZvoSDhtyJ"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.wesushiToken.mint,
                lendingPoolInfoAccount: new PublicKey('2oTEVdMpSRsamFeNYzqn3wifsPHRomA8TShgbTnDtTgN'),
                lendingPoolTknAccount: new PublicKey('4VAyWCoRbW5YXiV5Rz7pZy7miYBJLjfZYsykDuTnWyqj'),
                lendingPoolFeeAccount: new PublicKey('4VAyWCoRbW5YXiV5Rz7pZy7miYBJLjfZYsykDuTnWyqj'),
                lendingPoolShareMint: new PublicKey('EEhiV55jAt5JDpeH3GF4VGrStiPn5gCeWmqffyTp9B4E'),
                lendingPoolShareAccount: new PublicKey('5SDoskkCcV8NBJcP97g9CS7BEGLqXT5q2F6Ve2W3VN71'),
                lendingPoolCreditMint: new PublicKey('E2ocWnUUuBpUDLRSxB5VdUqr635DMPiWuV4PYDtiyGbi'),
                lendingPoolCreditAccount: new PublicKey('L9idBQvg4SKzdtHPgZijpJGkDT4WVbhnA7KmTVPT477'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("9SWy6nbSVZ44XuixEvHpona663pZPpVgzXQ3N7muG4ou"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("4dDzSb5sVQuQU7JpiELNLukEUVYoTNyhwrfTd59L3HTK"),
            ammTargetOrders: new PublicKey("4soQgpB1MhYjnD2cbo3aRinZh9muAAgBhTk6gLYSG4hM"),


            ammCoinAccount: new PublicKey("CTTAtNw3TPxMhZVcrxHPjbyqEfYS7ShAf6KafC4xeJj"),
            ammPcAccount: new PublicKey("EPav47MmuNRnHdiRSNpRZq9fPAvpvGb81mWfQ4TMc4VQ"),
            poolWithdrawQueue: new PublicKey("4DwCSyerQnxtiHc2koWWxpz31KjQdmLFe8ywWwrVkwEq"),
            poolTempLpTokenAccount: new PublicKey("EwFVC9RA6WRBpqPjTxRmw6iYVtCGd7JoSi5MECvc3vE9"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("3uWVMWu7cwMnYMAAdtsZNwaaqeeeZHARGZwcExnQiFay"),
            serumBids: new PublicKey("HtAQ6zXqg53WKTHoPNz6Y6nfy2vpRvaFFif13y9wWQzo"),
            serumAsks: new PublicKey("CyMeznxwdK1vVLB8yrq1MpwZpmQ43UipnqhahrwHNj5r"),
            serumEventQueue: new PublicKey("EiA2FLSrSJkJEGZg79eJkrAz7wtaB3jHDiXvQ4v5hZyA"),
            serumCoinVault: new PublicKey("2DiofKbhznosm6ngnVXZY9r6j3WypkK6PXZu4XVhrUwS"),
            serumPCVault: new PublicKey("FwRAP48S9kwXFgiBDHU4NvuGkFnqctXEurgLFZFqdt2Z"),
            serumVaultSigner: new PublicKey("4BRTPsziQ1QcKtsqAiXjnJe5rASuu41VXF1Bt5zpHqJs"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("AuyqPBiY6sNUpH6jx415NGcdvNdYbkbYsyVabUqEVdkj"),
            stakePoolAuthority: new PublicKey("AmgTDN5yBjjbCG5o1CtpxB7hxpaQtHCj1GYMFtQud7TJ"),
            stakePoolLpAccount: new PublicKey("DoK13McBSoFb9Q37DqVkx5LiJTpYqhM2NUv4go1DJ5RF"),
            stakePoolRewardAccount: new PublicKey("FBbe6XRrXeaQ3XcXWk2tUi711HBrmmi2eLdX2L6DJ8SZ"),
            stakePoolRewardAccountB: new PublicKey("2YsF3Nvw4ZaTUNqbvaGr8UzrvnoWFB343s1tFRjvM1pE"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'weUNI-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weuniToken.mint,
        lpMint: new PublicKey("EEC4QnT41py39QaYnzQnoYQEtDUDNa6Se8SBDgfPSN2a"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('HUceum9JSVXBKANW6bfjqYTMz9cCX5EQTbp1k5PQEjfh'),
        strategyAuthority: new PublicKey('8Qj1ko1GtLGJmMiVNAkvaCqwiwnroGQfmgn4z3X4S2Bh'),
        strategyFarmInfo: new PublicKey('9xDCwRkBUzfXWhozJAo2EjqyvheL7Z2kSyWH5XuhD1RH'),
        strategyTknAccount0: new PublicKey('69C2ThyqGqfY3Upuz5MzWGWZj835WGNYPxwpaVqCa6tr'),
        strategyTknAccount1: new PublicKey('9rkQED5ZNhjdEBQf3C6vFy3r8gfhb8fTADCfKFZZ7MZd'),
        strategyLpAccount: new PublicKey('FJkNtAa76ZfMg8F8dH7rEdt5nvUmNbE49meVnrU4vtfo'),
        strategRewardAccount: new PublicKey('A76hGAbveg6kfbvn9gMP5wYPjS42wp4sCBBMiPdpd4BC'),
        strategRewardAccountB: new PublicKey('B7mXfFn4eYvat86KdpZ2gsFhvRoTohQVxZhXZXnDXMsy'),
        strategyBorrowCreditAccount0: new PublicKey('8GTzZsWWQt8niGjDde1bgqTnP1Ch5W8wqS84zqzntt2Y'),
        strategyBorrowCreditAccount1: new PublicKey('HJUAmsr2zNw6ZPJK5xmrZE8dJxBfwMaG9vbZ6a9FWgbU'),

        strategyRewardsSwapTarget: new PublicKey("69C2ThyqGqfY3Upuz5MzWGWZj835WGNYPxwpaVqCa6tr"),
        strategyRewardsSwapTargetB: new PublicKey("69C2ThyqGqfY3Upuz5MzWGWZj835WGNYPxwpaVqCa6tr"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weuniToken.mint,
                lendingPoolInfoAccount: new PublicKey('H4uTQ8CCFJYVQYZ8c2bH7hHGrrok6k4pWDhk5NQt9KR8'),
                lendingPoolTknAccount: new PublicKey('E3fN9Wqesn2NbYGPjybFo5HTMpcyLPnWNHovQpQqqw8G'),
                lendingPoolFeeAccount: new PublicKey('E3fN9Wqesn2NbYGPjybFo5HTMpcyLPnWNHovQpQqqw8G'),
                lendingPoolShareMint: new PublicKey('CGj7e1g4ojW1RhSocF8AKWxHFaqCQjK8kBsbHqNB4BxP'),
                lendingPoolShareAccount: new PublicKey('8BtR6Dzg4fLmLv4ZZdX1x22WYiPHvp8AtvRFgSMQwxdw'),
                lendingPoolCreditMint: new PublicKey('74WmdEZG9rjvcAX2yczd5h54QeXnq62sVNLMz1DU2Abh'),
                lendingPoolCreditAccount: new PublicKey('8kLAk9EiLV6qePNEtjnDLyWbRsySgMPSTihdWAEEv9H9'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("8J5fa8WBGaDSv8AUpgtqdh9HM5AZuSf2ijvSkKoaCXCi"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("4s8QacM13Z9Vf9en2DyM3EhKbekwnmYQTvd2RDjWAsee"),
            ammTargetOrders: new PublicKey("FDNvqhZiUkWwo95Q21gNimdqFQDJb5nqqttPT5uCUmBe"),


            ammCoinAccount: new PublicKey("B5S6r6DBFgB8nxa8P7FnTwps7NAiTsFbiM6Xo7KrGtxP"),
            ammPcAccount: new PublicKey("DBd8RZyBi3rdrpbXxXdcmWuTTrfkA5vfPh9HDLo1cHS"),
            poolWithdrawQueue: new PublicKey("CsPmj2rcDNQF85Q1bvWbieNkymtEHqyo7aXHmwHNiEKQ"),
            poolTempLpTokenAccount: new PublicKey("9qHe2MC69BTwZY2GBJusz1rgMARsJAd6WvRu7cCYczjg"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("B7b5rjQuqQCuGqmUBWmcCTqaL3Z1462mo4NArqty6QFR"),
            serumBids: new PublicKey("2FafQRbcuh7sE9iPgWU7ccs5WNsSyih9rXCTZn4Bv3t2"),
            serumAsks: new PublicKey("HJMohwcR3WUVFj9whhogSpBYzqKBjHyLcXHecArwgUEN"),
            serumEventQueue: new PublicKey("CTZuXPjhrLb4PSNSqdsc7xUn8eiRAByfQXoi4HXkPVUe"),
            serumCoinVault: new PublicKey("4c4EMg5rPDx4quJdo3tL1uvQVpnoLLPKzMDn224NtER7"),
            serumPCVault: new PublicKey("8MCzvWSskaoJpcXNVMui9GfzYMaMBQKPvE9GpqVZWtxq"),
            serumVaultSigner: new PublicKey("E4D2s9V4wuh6MMEJp7zkh6rcGgnoncJtMFFHjo4y1d5v"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("6X495xkPWkw9SQFYf7yL1K8QooZyaeEQ6u7yMWNNZxNV"),
            stakePoolAuthority: new PublicKey("7fzrABKta6exUaLZPgvmCrMYc81qgAdzVBtQyVa5ia7Y"),
            stakePoolLpAccount: new PublicKey("4wnWp8ywmCD9D1A4BuLLaJKZQx7FMvs2S97gJnyqsU8w"),
            stakePoolRewardAccount: new PublicKey("EDDGwRv5aBFQu9fxK75USg2FD38N5QQPQTMGQLRnf1jA"),
            stakePoolRewardAccountB: new PublicKey("4PvsqG7KkkeqiZYZx6UijATDU7B8FbXxyMNnKmgcQHqH"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'whETH-USDC-Strategy-1':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.whethToken.mint,
        lpMint: new PublicKey("3529SBnMCDW3S3xQ52aABbRHo7PcHvpQA4no8J12L5eK"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('3gXqfZmdbfKQvMyoST3rvTqS2uQmiZeEqNhxbTodQrq4'),
        strategyAuthority: new PublicKey('GkfG3ugPhKp9A6Yu34U56TNqM6ofvE6B1yxG7SB7uYby'),
        strategyFarmInfo: new PublicKey('2ZVSipiSEoyGjPDuW2Gws2SXUxKsFoa6YnTXuNDp8Pn2'),
        strategyTknAccount0: new PublicKey('7Up7daaNxVx5YRsFTP7L6jso7mmiW5ZneEEyK1K1f4LC'),
        strategyTknAccount1: new PublicKey('GQ3DPwah54uX1BXJeL3wBxpY8sropfgA2nzLDNRHg821'),
        strategyLpAccount: new PublicKey('7dyGzCDGKdvXQ8MZENcMqNkq1NhLbQwFioRtFpSfV35w'),
        strategRewardAccount: new PublicKey('2Ba7Gx5YwskvUyuSgoMEqAdFxhDf8qzbNHBrRi5CwSsJ'),
        strategRewardAccountB: new PublicKey('Fdg9kwBqos3zz35ZAPcoXXEMFwYuuFzzBtwF8NS7MxQ9'),
        strategyBorrowCreditAccount0: new PublicKey('453jQfQH6k7RtcZ8KoTDY3evkP7Pe41mQ6JKzgfMe7Cf'),
        strategyBorrowCreditAccount1: new PublicKey('Aw8pPmHdR2qUzakFUWB2jrGpbzEyajw321UsjCTrjPT6'),

        strategyRewardsSwapTarget: new PublicKey("7Up7daaNxVx5YRsFTP7L6jso7mmiW5ZneEEyK1K1f4LC"),
        strategyRewardsSwapTargetB: new PublicKey("7Up7daaNxVx5YRsFTP7L6jso7mmiW5ZneEEyK1K1f4LC"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.whethToken.mint,
                lendingPoolInfoAccount: new PublicKey('EEokU6r9bBdTz1umHjGhkjgfikARsJzJBXhYxnTmN4Xk'),
                lendingPoolTknAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolFeeAccount: new PublicKey('9Mq6KEyW1nF24TcGrdLLfnK2pE5VdMxbY2SZtcP84R5X'),
                lendingPoolShareMint: new PublicKey('Hk8b6i2C7PxFBPdd1TCrGssuZpCDEg4fh8yFuyHNJuJe'),
                lendingPoolShareAccount: new PublicKey('FNG4A4GWF1EsQVEjNrQMRT9Dr3H28TycQabtnsQF1MiD'),
                lendingPoolCreditMint: new PublicKey('7f7mU3tQvxD9t3f5ckhxcGSdwqoHHdWrJg43HXiUFWri'),
                lendingPoolCreditAccount: new PublicKey('7LvrwstXyshwVn7BPDgjR8Cndersy9GzbbGhyHwQcX3W'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("6iwDsRGaQucEcfXX8TgDW1eyTfxLAGrypxdMJ5uqoYcp"),
            ammTargetOrders: new PublicKey("EGZL5PtEnSHrNmeoQF64wXG6b5oqiTArDvAQuSRyomX5"),


            ammCoinAccount: new PublicKey("DVWRhoXKCoRbvC5QUeTECRNyUSU1gwUM48dBMDSZ88U"),
            ammPcAccount: new PublicKey("HftKFJJcUTu6xYcS75cDkm3y8HEkGgutcbGsdREDWdMr"),
            poolWithdrawQueue: new PublicKey("A443y1KRAvKdK8yLJ9H29mgwuY56FAq1KvJmkcPCn47B"),
            poolTempLpTokenAccount: new PublicKey("jYvXX2z6USGtBSgJiPYWM9XZTBoiHJGPRGeQ9AUX98T"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("8Gmi2HhZmwQPVdCwzS7CM66MGstMXPcTVHA7jF19cLZz"),
            serumBids: new PublicKey("3nXzH1gYKM1FKdSLHM7GCRG76mhKwyDjwinJxAg8jjx6"),
            serumAsks: new PublicKey("b3L5dvehk48X4mDoKzZUZKA4nXGpPAMFkYxHZmsZ98n"),
            serumEventQueue: new PublicKey("3z4QQPFdgNSxazqEAzmZD5C5tJWepczimVqWak2ZPY8v"),
            serumCoinVault: new PublicKey("8cCoWNtgCL7pMapGZ6XQ6NSyD1KC9cosUEs4QgeVq49d"),
            serumPCVault: new PublicKey("C7KrymKrLWhCsSjFaUquXU3SYRmgYLRmMjQ4dyQeFiGE"),
            serumVaultSigner: new PublicKey("FG3z1H2BBsf5ekEAxSc1K6DERuAuiXpSdUGkYecQrP5v"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("8JJSdD1ca5SDtGCEm3yBbQKek2FvJ1EbNt9q2ET3E9Jt"),
            stakePoolAuthority: new PublicKey("DBoKA7VTfnQDj7knPTrZcg6KKs5WhsKsVRFVjBsjyobs"),
            stakePoolLpAccount: new PublicKey("2ucKrVxYYCfWC6yRk3R7fRbQ5Mjz81ciEgS451TGq2hg"),
            stakePoolRewardAccount: new PublicKey("3nhoDqudHBBedE9CuUqnydrWWiMFLKcZf3Ydc9zbAFet"),
            stakePoolRewardAccountB: new PublicKey("B4LA1grBYY9CE3W8sG9asR7Pi2a6eSt2A8RHcXXKJ1UM"),
        },

        // rewardsAmmInfo: {
        //     // RAY -> USDC
        //     direction: 1,
        //
        //     ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
        //     ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
        //     ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
        //     ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),
        //
        //     ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
        //     ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
        //     poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
        //     poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
        //     serumProgramId: SERUM_PROGRAM_ID_V3,
        //     serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
        //     serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
        //     serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
        //     serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
        //     serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
        //     serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
        //     serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        // },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'STARS-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.starsToken.mint,
        lpMint: new PublicKey("FJ68q7NChhETcGVdinMbM2FF1Cy79dpmUi6HC83K55Hv"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.starsToken.mint,

        strategyAccount: new PublicKey('Cyk5rdRFAw2j5CYX41CFvJWdwNn2dgR3hdaqjUNt3ZGv'),
        strategyAuthority: new PublicKey('BTncTCzbrnNgEdGK928ZPXAG5hWv2ggs1fVRw91Ye5Jj'),
        strategyFarmInfo: new PublicKey('8GvmvVV5VeejF2j83XPEhQL1NYptAYCpByzhGwQgWrV5'),
        strategyTknAccount0: new PublicKey('FPrzvByxbVJg4hjGS9CV2CJPyBFqmSPCQv4iofpHAea1'),
        strategyTknAccount1: new PublicKey('7fGXK8g8A6WGq7bKSR7u4QPtVHCKRmEUg3nNWgjP7RiL'),
        strategyLpAccount: new PublicKey('FFhpdDbSPSFPpM47qi74w5rCkuhUuxcV3pn68x9d9AWi'),
        strategRewardAccount: new PublicKey('3Vq8QcXws8vQfjLQnLZd22dQeyPGE4GxnPaQWiaCnAUp'),
        strategRewardAccountB: new PublicKey('7fGXK8g8A6WGq7bKSR7u4QPtVHCKRmEUg3nNWgjP7RiL'),
        strategyBorrowCreditAccount0: new PublicKey('8g72MkKREw4zeXZtr48MLVBMS7k9QzBeQvcYxrZiJDQh'),
        strategyBorrowCreditAccount1: new PublicKey('6mRoV35KYpi9VxPPFSBgpzigW3TJ8xrh2cLVbebrzRk8'),

        strategyRewardsSwapTarget: new PublicKey("FPrzvByxbVJg4hjGS9CV2CJPyBFqmSPCQv4iofpHAea1"),
        strategyRewardsSwapTargetB: new PublicKey("FPrzvByxbVJg4hjGS9CV2CJPyBFqmSPCQv4iofpHAea1"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.starsToken.mint,
                lendingPoolInfoAccount: new PublicKey('Cc4PGrJGqbt4XmRVbSD8N6q3MMRRY1LfdQtN3w3Lq4Wr'),
                lendingPoolTknAccount: new PublicKey('ASUq7tK1U985yECszqCwRgXBAXDcPt9DNVdD5vC7pfn5'),
                lendingPoolFeeAccount: new PublicKey('ASUq7tK1U985yECszqCwRgXBAXDcPt9DNVdD5vC7pfn5'),
                lendingPoolShareMint: new PublicKey('A6Xhvhifj8B2Ui3SkNiW99DKorRAxmWx1Vc7XdicNTX2'),
                lendingPoolShareAccount: new PublicKey('Hg1rSRYFZoPhVwBoy38ZBLgo71Thsixn2SRWoF7fvRgs'),
                lendingPoolCreditMint: new PublicKey('GYUmSz3YvTNJ1cbc8EpUjUN2rEC32ToVVPhJoV9E5zMB'),
                lendingPoolCreditAccount: new PublicKey('6w1dtzUaTP4NHHFAMGPuoVXeyGorTvrVrpJU6R5HQwaT'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("CWQVga1qUbpZXjrWQRj6U6tmL3HhrFiAT11VYnB8d3CF"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("D3bJNYcUhza55mdGFTAUi4CLE12f54qzMcPmawoBCNLc"),
            ammTargetOrders: new PublicKey("FNjcSQ7VB7ULoSU7BDTotiRDmqiQj7CvVxHALnYC5JGP"),


            ammCoinAccount: new PublicKey("5NtsnqVNXGmxs6zEU73W2RaFh4e58gqdWrxMvzcqNxGk"),
            ammPcAccount: new PublicKey("MZihwPviJgm5WjHDmh6c5pq1tTipuZnHFN3KBg63Mtj"),
            poolWithdrawQueue: new PublicKey("5NRhJQS8m4pgc8Lgo1kuqHJrU8JAeToriPvpJ4LY88uH"),
            poolTempLpTokenAccount: new PublicKey("8vLEHvkCEdAj4YPGbfrcTKHccaEJQwuY32WunJWzyuZx"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("DvLrUbE8THQytBCe3xrpbYadNRUfUT7SVCm677Nhrmby"),
            serumBids: new PublicKey("9Nvw43fQ4vNfdJgajMC4JUpLGGTiia1vGYEM7SbfaWei"),
            serumAsks: new PublicKey("CnVNbSQcVNQjGA4fdBtSrzDyFNXAHuBhcMnZsQBpEHo5"),
            serumEventQueue: new PublicKey("D1hpxetuGzfz2mSf3US6F7QHjmmA3A5Q1EUJ3Qk5E1ZG"),
            serumCoinVault: new PublicKey("AzhvXGjqJtDW4ieSYVje3zxL14TP1pGJv6uULR2F86uR"),
            serumPCVault: new PublicKey("8SrtqysGeiKkXWMGMgee9frWbGdhXZr9gWHh2VKRnvkZ"),
            serumVaultSigner: new PublicKey("EN7RnB2RVxeDcTQWFBAuaf5Bg9sEuHhwwWiuj1TFHEuC"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("AwUDfg4NYbLQRAcFipoJwyZTpqNvw5v6C7EypryL12Y6"),
            stakePoolAuthority: new PublicKey("BBsHoRKkRGyyjsQEDqMMjg4vNNbZhWhsjBE9vQc15obQ"),
            stakePoolLpAccount: new PublicKey("H5VXBm5Es85jhLN5VyePC95KCx4FyUDC9apq7ksvzBgK"),
            stakePoolRewardAccount: new PublicKey("5DsNCnLyZm3B8iVACCWPvXs2WXfmfuA4uiRinJJuEZgz"),
            stakePoolRewardAccountB: new PublicKey("2LQWPUn6rxYrzW1oPM48ddXmWLJQTQ8P6UrJnE9ZCSy2"),
        },
    },
    'weDYDX-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weDYDX.mint,
        lpMint: new PublicKey("BjkkMZnnzmgLqzGErzDbkk15ozv48iVKQuunpeM2Hqnk"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('EbbfYV8jc286xjiH1qaoBCzh6s4JYuSCfhhdZyi1S3JG'),
        strategyAuthority: new PublicKey('4M4qpysWjchzPSRuUFd9XAvMNtw5dZZg5BFekZiPCNVw'),
        strategyFarmInfo: new PublicKey('4hHNs1DYF1uiq5ekQCaUgDzLvHWrLo7FQXtX8GHqfob4'),
        strategyTknAccount0: new PublicKey('AQz7mnfw8RLcenJPScDXohuLGxSLcro5BmCS3h3JirvR'),
        strategyTknAccount1: new PublicKey('HDbPcWqHavdYKfXiV6cBzsAHEfPJ4RytayDo7w5ceM7V'),
        strategyLpAccount: new PublicKey('GmHttjgRV3PFEmfntVhjvBoWvkLvRvJuGGznouRFyUdf'),
        strategRewardAccount: new PublicKey('ECmPhQHoMR4nUdcK2xQ12WuRunmbo38L6FMbbfLuvFrC'),
        strategRewardAccountB: new PublicKey('2vTXtfJfM82tmviJCnrSFrayAyaKmkjGkn8LmsNg1JFy'),
        strategyBorrowCreditAccount0: new PublicKey('14TdPeizu7d7Z9ArhZTzrW7r2AAT7qUuxREL8PPZXuXn'),
        strategyBorrowCreditAccount1: new PublicKey('2tHibegVecYTW1CWa8592nYn4u1pmvttgpPo9nhF8p6V'),

        strategyRewardsSwapTarget: new PublicKey("AQz7mnfw8RLcenJPScDXohuLGxSLcro5BmCS3h3JirvR"),
        strategyRewardsSwapTargetB: new PublicKey("AQz7mnfw8RLcenJPScDXohuLGxSLcro5BmCS3h3JirvR"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weDYDX.mint,
                lendingPoolInfoAccount: new PublicKey('HTBxsYGGAfL8KKPNCVbCKnB3i8JbwCGCPDb27pKVwokU'),
                lendingPoolTknAccount: new PublicKey('6oKdAxTYQg4kQZWo5kgoF31nqg2hWNHv2iFmvAnhUSSX'),
                lendingPoolFeeAccount: new PublicKey('6oKdAxTYQg4kQZWo5kgoF31nqg2hWNHv2iFmvAnhUSSX'),
                lendingPoolShareMint: new PublicKey('BXuDGvSLgr8KJyh54movhkU9gYiNyEVn8Xf8bYYCWnru'),
                lendingPoolShareAccount: new PublicKey('DKY2bCEwfpCUUcgpQsn7ihHb6tNj2hXTuuXutjQ9fs32'),
                lendingPoolCreditMint: new PublicKey('GoEZTkTJUY3xqErirC48VKBTFC4Xs6brux2DezL84DL9'),
                lendingPoolCreditAccount: new PublicKey('DstiYmSty3GxRcpibiWJw4k8heN8WHo4mtKdKkaLRtv9'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("CbGQojcizFEHn3woL7NPu3P9BLL1SWz5a8zkL9gks24q"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("75hTsLMn57111C8JwG9uqrkw6iZsFtyU8CYQYSzM2CY8"),
            ammTargetOrders: new PublicKey("3pbY7NyETK3UBG1yvaFjqeYPLXMd2wHgcZVJi9LZVdx1"),


            ammCoinAccount: new PublicKey("45pPLPHYUJ7ainr9eqPzdKcWJSbGuoUwcMcMamAXgcCX"),
            ammPcAccount: new PublicKey("7aE4zihDvU58Uua8W82Q2u915rKqzpmpWPxZSDdeXrwu"),
            poolWithdrawQueue: new PublicKey("2r8yHQGdydgngeTXdqsM2P2ZWVmwRAe3Kq3MLTCQPpHD"),
            poolTempLpTokenAccount: new PublicKey("DBmenZarP1WQx9uvrKQQj3pNfhmNanZ9ns5tpMYpDcyJ"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("GNmTGd6iQvQApXgsyvHepDpCnvdRPiWzRr8kzFEMMNKN"),
            serumBids: new PublicKey("89Ux1PrzAVv5tejtCQhfs5tqEfQdb3WQsfY6f7BzQtsN"),
            serumAsks: new PublicKey("36eRuVT8kyWq1UbZeYf66q5EhUpNP2Kq8TgffyVbHEzF"),
            serumEventQueue: new PublicKey("4GX63nbB8SHwDeDpuSKacfch1ANTLp4zn8ivkcTjCnEn"),
            serumCoinVault: new PublicKey("CXxN6hGatd5nK7uPwxvxHYmqvM4b88eKb9fcHapRhtda"),
            serumPCVault: new PublicKey("NMWKX4jfzkKvRBYkcvurus8aofaHZ8MwMNYqudztWZh"),
            serumVaultSigner: new PublicKey("DD6e6WMaZ3JePsBNP9Eoz9aJsD3bZ81EjMvUSWF96qQx"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("C8BjS9DGDvC2zS3n6fTvm1rjPbA33uZ7CAvEUZ3tg7aM"),
            stakePoolAuthority: new PublicKey("8sW8go8eeyn9tCJEndchQ4RKfTkZGMDwKdNw9QVCpgys"),
            stakePoolLpAccount: new PublicKey("vZUipizkaYcEa6fUBjtQU7A1dG8XmBgt6dCDFe16HyU"),
            stakePoolRewardAccount: new PublicKey("ATLtTWi5ongWbMqbHFrAiMD11dRPgDWyJLzc7tZTcnjK"),
            stakePoolRewardAccountB: new PublicKey("CmW8akq2vGQeDUD1yeZTRbje21p5D61PW2mXK4kMBwo6"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },
    'weAXS-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weAXS.mint,
        lpMint: new PublicKey("6PSoJQ7myQ1BJtbQC6oiWR8HSecQGyoWsPYTZRJo2ci3"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('G1fDzBmnzHdyhWc9ddwvkfX4h8QdZneaghE2qVCM6JsW'),
        strategyAuthority: new PublicKey('AwiXyi1MMkvFKpu8ZycNiYGqCRFAMDyeMF7n1wBLHKEg'),
        strategyFarmInfo: new PublicKey('Cx7ErcVCPKCUerXd1nf3RCRE1KMQxpFd3EEvVBJEzSdF'),
        strategyTknAccount0: new PublicKey('oEPtLcgUtdZcBuHZpyw6J7pta2ys7x1WvF9QQeRfKff'),
        strategyTknAccount1: new PublicKey('5ToaHYNnLdJJJPhSYxvdvU5JPxirxaVXZmcUyRhKw28q'),
        strategyLpAccount: new PublicKey('GgZDVbGQyWnTiHHTrYV24pNs22WM29aRXGCwkuo9p7Bu'),
        strategRewardAccount: new PublicKey('7umixnP1P7zfUzjhXPi9jKz7NXvzLk8ryt6YCKg4ddV6'),
        strategRewardAccountB: new PublicKey('FfZABCkzVHKzai6aN4M9V8wy9uJ4iArHEFuGfAqc4uwH'),
        strategyBorrowCreditAccount0: new PublicKey('hFqVj6Y5vyKuuM5xS3RL6nDVHFrojY6Ka5SMC5tytX5'),
        strategyBorrowCreditAccount1: new PublicKey('H72GQN82kpj5P865vM92vcQh9tQa8neusMJqUh4EDRDX'),

        strategyRewardsSwapTarget: new PublicKey("oEPtLcgUtdZcBuHZpyw6J7pta2ys7x1WvF9QQeRfKff"),
        strategyRewardsSwapTargetB: new PublicKey("oEPtLcgUtdZcBuHZpyw6J7pta2ys7x1WvF9QQeRfKff"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weAXS.mint,
                lendingPoolInfoAccount: new PublicKey('2uzXxLcburgpzYKyNP2sswDLLmmD8cyiJ3XDt5jFY1hL'),
                lendingPoolTknAccount: new PublicKey('BGZ1sfSqJGB36rd24A3vaPndyY5zaCJBmtaURAPFLy7F'),
                lendingPoolFeeAccount: new PublicKey('BGZ1sfSqJGB36rd24A3vaPndyY5zaCJBmtaURAPFLy7F'),
                lendingPoolShareMint: new PublicKey('FRwMKg1LnCAQftEzC5M2B6MEY256aH7UuYkVr3p2yNoJ'),
                lendingPoolShareAccount: new PublicKey('4k6o1Q37VxeMfjninTjzsEuHfcXFhrXyuARzp7x1fn4J'),
                lendingPoolCreditMint: new PublicKey('5ZTnVWq5W6iGGJwr5GiE1xZHz4iNTjo4MFHbictBSVV5'),
                lendingPoolCreditAccount: new PublicKey('95kjVhqUzgVLNLfkqbta6QzB8SW14mBaPhsTYPnSsyzR'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("HopVRTvFvRe1ED3dRCQrt1h5onkMvY3tKUHRVQMc7MMH"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("BWJ96nvwjxqkjbu2rQN2H4U3E5PjWRMjrw2gqRcicazt"),
            ammTargetOrders: new PublicKey("6JtLCecsVp3UN1eEyZCHUBXKmd4HqnzYXB3AcS1DCEFe"),


            ammCoinAccount: new PublicKey("9pyHCyqHKvfbsTeYNQRTf5zHLzZedmxWA7YGC4ybCfBD"),
            ammPcAccount: new PublicKey("3WuvWRBqCtw1zqKmgZ79t5QK8Ph7Rfwf7nYB8Tv5KV2C"),
            poolWithdrawQueue: new PublicKey("B5ixFzgKhBysnWpJcEiozrf8Ykc361xKwkKstWCBLggW"),
            poolTempLpTokenAccount: new PublicKey("F7NwbHNfgU9p1iQAkjDs8HnbVVDsCXfSxv5jn4LxUxKn"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("HZCheduA4nsSuQpVww1TiyKZpXSAitqaXxjBD2ymg22X"),
            serumBids: new PublicKey("AaWuUgau8jRbbo2tVv3oFcAUyrSPXQxJkPUYsUPeCFe6"),
            serumAsks: new PublicKey("HFZCap81Q9JAuySeggJrQvw9XJuVdbb9R617BeTnsZbA"),
            serumEventQueue: new PublicKey("DQZDYYbCCknsvAUadroAs3YPH8XU4Bo7iCmTy3GAWFrF"),
            serumCoinVault: new PublicKey("69bNeKy1gM4xDfSfjCaVeGpoBR2hPeXioJMNShu1BjdS"),
            serumPCVault: new PublicKey("Gzbck4nwKYEEmwHxJxBpBpGhuMZaDhL1UqVBVFTrReki"),
            serumVaultSigner: new PublicKey("2qodg1XKZ5hauWnz1hBBfUWzMbRqABym2hMgLSS7pmJ2"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("7fe8QcJ6W2kHKL1h1HMYYJoGXz2LUcwCjkxX6MX35orK"),
            stakePoolAuthority: new PublicKey("u83t5Q349zcntifRmWECeAJDoq8kuYwsNFQUcGEnwn1"),
            stakePoolLpAccount: new PublicKey("2QWeQZJMpvcqwNMH1kBrFRjXptk5N2Js6c4tya2Jxtdm"),
            stakePoolRewardAccount: new PublicKey("BFANrk5U8N2Mu3WnacBP453nHm8C9mHy2cZiTpVuiMEj"),
            stakePoolRewardAccountB: new PublicKey("5hEx1CZbzhTuZtWUV2UpCHLDrDgJ4o3BjQqAr2uDYkFo"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },
    'weSHIB-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weSHIB.mint,
        lpMint: new PublicKey("AcjX5pmTMGSgxkdxc3r82r6WMKBvS6eQXXFz5ck5KKUa"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('Ea9Ng45ptiyuQRKCvQggT5TAmkyHuzSd6y3fHXdGXNQr'),
        strategyAuthority: new PublicKey('4nrrJFK4NDgPEXBgLBCp84X6SqaTu8qHfVgtvGvJ43cx'),
        strategyFarmInfo: new PublicKey('5EwjdAJMhbDWFEWKWbn2rZMmLfrJYceKGnZFzyMjHhQe'),
        strategyTknAccount0: new PublicKey('CeqhqwnzgXyUd5TufQsyceT78PEKRQJ6uqSbbc32Pc9v'),
        strategyTknAccount1: new PublicKey('AG8cUZtjBw2oJ8MkSh4hkaPVLNeFCaKvex6wWFPWDzEu'),
        strategyLpAccount: new PublicKey('9zJZ9jUCsQwHD9V1RVSRgKjvj7tSBXrLiZfiJXBKBb7x'),
        strategRewardAccount: new PublicKey('HV1ic4U6vA826f4eac5NfmpWtsCFib36tETSCyUeLTiC'),
        strategRewardAccountB: new PublicKey('pb5kvZXChysRVNEFF2t44swo184gVZPxDiDdHXgTVTf'),
        strategyBorrowCreditAccount0: new PublicKey('52qvZAFrMBfXF5dVMZLxPygvpDa9J2J34GePBHZQtsk7'),
        strategyBorrowCreditAccount1: new PublicKey('Hr8iEjiDn64iU4iQiDY9VaHofSSARPDXmWth1PBswbhJ'),

        strategyRewardsSwapTarget: new PublicKey("CeqhqwnzgXyUd5TufQsyceT78PEKRQJ6uqSbbc32Pc9v"),
        strategyRewardsSwapTargetB: new PublicKey("CeqhqwnzgXyUd5TufQsyceT78PEKRQJ6uqSbbc32Pc9v"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weSHIB.mint,
                lendingPoolInfoAccount: new PublicKey('39cozrAUvLyLJk4Lp9QcgxhVzJXiAN9pib9N4omTE4aU'),
                lendingPoolTknAccount: new PublicKey('wGKjnj2Vjq5HTVjRURnCbeHkjSi3nDGkJXpu4sf4atT'),
                lendingPoolFeeAccount: new PublicKey('wGKjnj2Vjq5HTVjRURnCbeHkjSi3nDGkJXpu4sf4atT'),
                lendingPoolShareMint: new PublicKey('4PsdDpNALxLQR3WSfvNxsrJbsP39xe6jXkGNTBeQfw59'),
                lendingPoolShareAccount: new PublicKey('FVuokDqsiq2LAoGbFMZFQBy67XM7dASpBJC7ZLdajVNN'),
                lendingPoolCreditMint: new PublicKey('7rQVZPoG38ZNKWP4cVrVJN6pZYUJpatx8u7Vih2ELTxW'),
                lendingPoolCreditAccount: new PublicKey('C9xwWZqEotP465frvUbxhnkHDoQDJL7vCSvZ2Yw2MpTy'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("SU7vPveBjEuR5tgQwidRqqTxn1WwraHpydHHBpM2W96"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("GQBHmoAkWiXEsoGYBqFGifCwDcfU2QYCwL8GHWFAbBqZ"),
            ammTargetOrders: new PublicKey("m7JmrtyJq4CxTYPmB3WKMVbsDxge8SD95rWHb4WREEz"),


            ammCoinAccount: new PublicKey("Ar37g5ebxRMq1NJyswFw9JKwRzZ8CzVr9SEMFH5wy9P8"),
            ammPcAccount: new PublicKey("EGynHanKeLLUYeWFE6ULXE1QRD8YPTV7ehSnphWsLqq2"),
            poolWithdrawQueue: new PublicKey("5VBUYLnVPHKtiFSqSEhaANF5fXv7QzATRB5BRHrQv3B"),
            poolTempLpTokenAccount: new PublicKey("G5Wrnafh95moPCxvKM5QNTMwAFQMGnnB9YTh24TvWnrD"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("Er7Jp4PADPVHifykFwbVoHdkL1RtZSsx9zGJrPJTrCgW"),
            serumBids: new PublicKey("2FkkrUR6MWq7Qd1LLMnR4NWmKcnqkNhK6NK6x7Wi1aRD"),
            serumAsks: new PublicKey("2Qxa2n6rRGm5f3Qc8H9HDV7wYsjnXZuXEWjgQs1bEwzK"),
            serumEventQueue: new PublicKey("5jGZmP29GfcEWKVHGxCymuD5qGg33kM2rPfPvD1BFS35"),
            serumCoinVault: new PublicKey("7nbNVNdhzZoD3KdjKnGRXbb9pPnDP2CSK1tPoRNvq94m"),
            serumPCVault: new PublicKey("6ovLsr9T6754PrgH3QwFCPtjizWEh6H3DDpc3QXnMsqi"),
            serumVaultSigner: new PublicKey("HoDhphLcgw8hb6GdTicv6V9are7Yi7xXvUriwWwRWuRk"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("CZZnmfvSgNVUiDBG4wN2NNcaYbsKDN4kLsc3SN8DMw6i"),
            stakePoolAuthority: new PublicKey("8jAuRD88B5arx8FXVRPVQt4oDWSpRHznNZDSnLSu5CWc"),
            stakePoolLpAccount: new PublicKey("AYMp5MzHBJVZez25tDcrYjPvZkEtFWUc5MSdUZpc84Xh"),
            stakePoolRewardAccount: new PublicKey("4MD45PUi8du6kt5m6q2Gfgz43dzCnXoJMpYxJTHQvzQz"),
            stakePoolRewardAccountB: new PublicKey("4FBypcmSNzuTxhRg13aoHKciaDjfkCkR7s2gHLoBF1T5"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'weMANA-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weMANA.mint,
        lpMint: new PublicKey("HpUkVAPRJ5zNRuJ1ZwMXEhbMHL3gSuPb2QuSER9YUd3a"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('Am29rLTszzhs4a4hHq94S8CwQmxkaHRcoWtTbk9gG33N'),
        strategyAuthority: new PublicKey('5rFpT3jX2LxAFxbrDE7qEZ4N19vuiKUQWeGKPqEtMpQB'),
        strategyFarmInfo: new PublicKey('3tdwyx6aQ1N1JQqUDDdXkfUfTbS3eaJjPhsnqV1u8XoH'),
        strategyTknAccount0: new PublicKey('urSvCgPFpGQ2kxvxzDZcocqFLruKbTHPAhjrNSXy7yf'),
        strategyTknAccount1: new PublicKey('82iFHeF6Fxxofbkws3US4LReZYBaTkkQUZWuMq2m3oym'),
        strategyLpAccount: new PublicKey('E7xZQB3BGGrgirrPwDn9PQJ3qqR4hh1hnaAoWZCG1UoF'),
        strategRewardAccount: new PublicKey('EUgvZn2dzY54DYvFhDpujfnN4jbDCMB1gaFHqA1znErz'),
        strategRewardAccountB: new PublicKey('4x2ikfa2eABy2A78msnFaD9JRKYn3Dsoaoqz9pRLCsM4'),
        strategyBorrowCreditAccount0: new PublicKey('6gYu8eCYumenxowEcYn7R9BNNYE8xKY2p2x2hNwEKNzP'),
        strategyBorrowCreditAccount1: new PublicKey('2pcKNf6BRqTjuDaXNZatme7WgSUfReUomqimZuAYLyWX'),

        strategyRewardsSwapTarget: new PublicKey("urSvCgPFpGQ2kxvxzDZcocqFLruKbTHPAhjrNSXy7yf"),
        strategyRewardsSwapTargetB: new PublicKey("urSvCgPFpGQ2kxvxzDZcocqFLruKbTHPAhjrNSXy7yf"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weMANA.mint,
                lendingPoolInfoAccount: new PublicKey('54fV2miWuFnvSJxPXk7j2XfTap9nCdU66zspZLnz5Buh'),
                lendingPoolTknAccount: new PublicKey('FWse57pdb6bAW4DpByaE6Fndoe7LR13f8xYWsU9ytuTt'),
                lendingPoolFeeAccount: new PublicKey('FWse57pdb6bAW4DpByaE6Fndoe7LR13f8xYWsU9ytuTt'),
                lendingPoolShareMint: new PublicKey('EFpcLPMW7wGj63j6A684Xd5K8qwgN7Y5ymgyNjNe7Azh'),
                lendingPoolShareAccount: new PublicKey('5W1EnAuzUe2tNWi5fVietgkGr41q8rjU3sRn4vrTEnds'),
                lendingPoolCreditMint: new PublicKey('8nDvhnMe3gjVZXsEL3EANXmb7qXDqkwsiBH2BG76gdGs'),
                lendingPoolCreditAccount: new PublicKey('HzLE6x3qSHvpbf2jRWinc4EcmAQhGK87r5CGkbrFpE6S'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("7Z1c6GHutf3q2MNheyFE8KMNVEALuiPaqoEMyjbCbuku"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("59ceFXHiqriiFLGqwabgVwZncq86hEw6bLyq3unDPnSG"),
            ammTargetOrders: new PublicKey("7gKNnFvzT7yrvoPnQakdV7BpCRAELnGBnn3dQYEojqHd"),


            ammCoinAccount: new PublicKey("2A8PVremRfR6SLAaX5qPBqatzcufr6pg8wdaD828E8FC"),
            ammPcAccount: new PublicKey("4XdAP2fmGo2ziQUAjDxg5y4jLhSy2ShdJE5TFg3jjxYG"),
            poolWithdrawQueue: new PublicKey("C6hV97zRb4WubTtwXsHTFEYLhu8vamSCCs3VmzkqSSyr"),
            poolTempLpTokenAccount: new PublicKey("3a8FXTm3d8RUZm9eXAGSxLQiQUCnu9ox9qiSqd4WysXX"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("7GSn6KQRasgPQCHwCbuDjDCsyZ3cxVHKWFmBXzJUUW8P"),
            serumBids: new PublicKey("FzD4EpQmwsFhAeRJF1S6efp1uqkgJ8hqWrNkWoCxMJuc"),
            serumAsks: new PublicKey("HLYwubWymYFtMhgU9BcNz8ngsKGNDSjQzooWYbuQ7Pze"),
            serumEventQueue: new PublicKey("JCxtKZBuqYruJm7TZpd9DEtsSYcq23dc42dRQz4wf5Cq"),
            serumCoinVault: new PublicKey("3mmhhvfLeHMtTMm17r477rcnbVUtRusqVgQ3wZh8hepV"),
            serumPCVault: new PublicKey("9FgALLcqFUn1o3tn5NPiEhh7HRPYr1n25cAXhcDjfGNJ"),
            serumVaultSigner: new PublicKey("DcxxF4grETLsyYWkqAzT3MYUFAE2VA4fRs7i4Uu4K7dv"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("EBS8tc4proQE2Fj6HxU4piiZP8oiDrvyJUijDCX7P7QN"),
            stakePoolAuthority: new PublicKey("4ZxvJJHqxC9aaUMkBfyYr2qET35tcCZxn2VikiVVSKn2"),
            stakePoolLpAccount: new PublicKey("67KBaLyhWRSci4cqKgKQ2xEmuYFiRBxPHVZD5vtST5rm"),
            stakePoolRewardAccount: new PublicKey("kquv6VidWpoqFMrR7nz76EPP8X7xFJJetEL1yNB92V2"),
            stakePoolRewardAccountB: new PublicKey("91NJTMLgChsTWTZ5oG5NJSyCGT6jxFSjPTe47k9Gn7He"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    'weSAND-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.weSAND.mint,
        lpMint: new PublicKey("3dADrQa7utyiCsaFeVk9r7oebW1WheowhKo5soBYKBVT"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.srmToken.mint,

        strategyAccount: new PublicKey('7b8ju14WtQxLdyfZ5uiBu5tMrrhJoZcNpbWjZbZb63TW'),
        strategyAuthority: new PublicKey('6UsgS9jygHmXcoojjT9rncX59xUk2HbyRhkkxfZAAL51'),
        strategyFarmInfo: new PublicKey('BKJs9NsxbFxbLjmsCWrLJ1vy3vc3ZEfe7zfjpqYeEXku'),
        strategyTknAccount0: new PublicKey('8kpNub2AbWcALak5vKHq7LnBWVKQrAaKmv8ZGXcta2B6'),
        strategyTknAccount1: new PublicKey('FRBAcppnTye4NFpXVrZbNjBwDmbXj471afjJdKbuaFN2'),
        strategyLpAccount: new PublicKey('JDa3uetxXF4pCXkQufmJXp4LeM8qwApRCz89WQrBuTQQ'),
        strategRewardAccount: new PublicKey('7idzM6UkmE9MKdbD26zMrdD4kpLLe7yydY1ZADUav9Wu'),
        strategRewardAccountB: new PublicKey('A5sZeec5XQrXaGwYNyzLy2PQac77U562JbmT93iDk86U'),
        strategyBorrowCreditAccount0: new PublicKey('ECV9ow5ExHSeCDcNnsCxMrFWYTta57PrNS4qjjWuPbGu'),
        strategyBorrowCreditAccount1: new PublicKey('G2vTWH9tCiv1pTq4rB3pKzN9DNR7WSuQ76YVMkRfCpnz'),

        strategyRewardsSwapTarget: new PublicKey("8kpNub2AbWcALak5vKHq7LnBWVKQrAaKmv8ZGXcta2B6"),
        strategyRewardsSwapTargetB: new PublicKey("8kpNub2AbWcALak5vKHq7LnBWVKQrAaKmv8ZGXcta2B6"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.weSAND.mint,
                lendingPoolInfoAccount: new PublicKey('FKedcrS3MvvinwYfdy5xsidfBAmuDxRG8rG2kFU43NeV'),
                lendingPoolTknAccount: new PublicKey('E9AaQk4HBnJoZDiws4RcxnfPZubQ4zpJY7YCo5TbBvzj'),
                lendingPoolFeeAccount: new PublicKey('E9AaQk4HBnJoZDiws4RcxnfPZubQ4zpJY7YCo5TbBvzj'),
                lendingPoolShareMint: new PublicKey('CcJ7ukcpXX61dv1hcmVzEfHg7aDMoThdZCzAquCLcTg2'),
                lendingPoolShareAccount: new PublicKey('5bqyvMyCvbTKbBRP1dkjauecW7uhpTvyj8NZU76y5qyt'),
                lendingPoolCreditMint: new PublicKey('HP9mJjAKYgR4TS6dqYB4mrEEmPHfgGztgTGjcrodDjvF'),
                lendingPoolCreditAccount: new PublicKey('HbtkkPyiETCyDADYPPE58F4nisoDdhRjEr7R8GGKD4j3'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("3cmPpX8kKzEra2umtLCDxMfjma82ELtAMaSYVmdaNLxi"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("Gwd7zQAHr3bkyGkNRrKM5hZwUVsjdBEeyNr8ME5cqxUz"),
            ammTargetOrders: new PublicKey("9wu7YGgankeWkeygE8Qt8A5qHeycDp9vBTSUsr85QBzZ"),


            ammCoinAccount: new PublicKey("C1MF3pFLfRBzrywrMJvHPP2EUjCQfKYmyW975rdkXB85"),
            ammPcAccount: new PublicKey("5mLSVNzt7juMjxXohvvwHZdojG81GbdFrjYxgsSqDnNH"),
            poolWithdrawQueue: new PublicKey("7XpC5EC51j1WBz56Nr9cq33akEeaU2NoA7MQ3NMYNjMX"),
            poolTempLpTokenAccount: new PublicKey("8EW9HQ4QtXTFSyZ6LuLk3bRUvi1MsPVxFKmUqd37a1vh"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("3FE2g3cadTJjN3C7gNRavwnv7Yh9Midq7h9KgTVUE7tR"),
            serumBids: new PublicKey("HexBvvrL8jZRGti3zXZ6vCXqDzJ7skgSaMgqLJjzXaCm"),
            serumAsks: new PublicKey("224juRrCj1VeeiG3qoXLDrJkGPSh8MJH2XuEsLCHLLj7"),
            serumEventQueue: new PublicKey("DY4P5LEdehACn83akvVb49MNJf5VhDQuWTxfx95nGdgY"),
            serumCoinVault: new PublicKey("2t3MMN5FLMqsieeUsQK8nfM4YKQobK5ZvDgjNV6hn7SW"),
            serumPCVault: new PublicKey("55SiYWMEP7XrMvP31YhZQE1YTkypv6yeDe7Z3663pMfb"),
            serumVaultSigner: new PublicKey("FLqXAFVSveyKjtfWpfT8ttrn3yUAzoHGKiYwcR5r6tp7"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("FAKzZoGVCEBDRuHN4gDswAx7PsocCorDqH6dQaxnyorT"),
            stakePoolAuthority: new PublicKey("8eJKiLB4GUg5FK1VDGAd7hnmbfZYqffDrR9yywsywazU"),
            stakePoolLpAccount: new PublicKey("E6HgWYbvz26yyZYqgQUXAKwZyx41tAy94YL8WEN4edfi"),
            stakePoolRewardAccount: new PublicKey("DJr47f2hjR5SUS2VrpQdBJtFJ8SGNrSBKQrKmu4HdyzM"),
            stakePoolRewardAccountB: new PublicKey("7Ruf2uHCtddXgSh8PQV7Htj1TWARwBxfGkpokFMoD4SA"),
        },

        rewardsAmmInfo: {
            // RAY -> USDC
            direction: 1,

            ammId: new PublicKey('6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('J8u8nTHYtvudyqwLrXZboziN95LpaHFHpd97Jm5vtbkW'),
            ammTargetOrders: new PublicKey('3cji8XW5uhtsA757vELVFAeJpskyHwbnTSceMFY5GjVT'),

            ammCoinAccount: new PublicKey('FdmKUE4UMiJYFK5ogCngHzShuVKrFXBamPWcewDr31th'),
            ammPcAccount: new PublicKey('Eqrhxd7bDUCH3MepKmdVkgwazXRzY6iHhEoBpY7yAohk'),
            poolWithdrawQueue: new PublicKey('ERiPLHrxvjsoMuaWDWSTLdCMzRkQSo8SkLBLYEmSokyr'),
            poolTempLpTokenAccount: new PublicKey('D1V5GMf3N26owUFcbz2qR5N4G81qPKQvS2Vc4SM73XGB'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep'),
            serumBids: new PublicKey('Hf84mYadE1VqSvVWAvCWc9wqLXak4RwXiPb4A91EAUn5'),
            serumAsks: new PublicKey('DC1HsWWRCXVg3wk2NndS5LTbce3axwUwUZH1RgnV4oDN'),
            serumEventQueue: new PublicKey('H9dZt8kvz1Fe5FyRisb77KcYTaN8LEbuVAfJSnAaEABz'),
            serumCoinVault: new PublicKey('GGcdamvNDYFhAXr93DWyJ8QmwawUHLCyRqWL3KngtLRa'),
            serumPCVault: new PublicKey('22jHt5WmosAykp3LPGSAKgY45p7VGh4DFWSwp21SWBVe'),
            serumVaultSigner: new PublicKey('FmhXe9uG6zun49p222xt3nG1rBAkWvzVz7dxERQ6ouGw'),
        },

        rewardsAmmInfoB: {
            // SRM -> USDC
            direction: 1,

            ammId: new PublicKey('8tzS7SkUZyHPQY7gLqsMCXZ5EDCgjESUHcB17tiR1h3Z'),
            ammAuthority: new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),
            ammOpenOrders: new PublicKey('GJwrRrNeeQKY2eGzuXGc3KBrBftYbidCYhmA6AZj2Zur'),
            ammTargetOrders: new PublicKey('26LLpo8rscCpMxyAnJsqhqESPnzjMGiFdmXA4eF2Jrk5'),

            ammCoinAccount: new PublicKey('zuLDJ5SEe76L3bpFp2Sm9qTTe5vpJL3gdQFT5At5xXG'),
            ammPcAccount: new PublicKey('4usvfgPDwXBX2ySX11ubTvJ3pvJHbGEW2ytpDGCSv5cw'),
            poolWithdrawQueue: new PublicKey('7c1VbXTB7Xqx5eQQeUxAu5o6GHPq3P1ByhDsnRRUWYxB'),
            poolTempLpTokenAccount: new PublicKey('2sozAi6zXDUCCkpgG3usphzeCDm4e2jTFngbm5atSdC9'),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey('ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA'),
            serumBids: new PublicKey('AuL9JzRJ55MdqzubK4EutJgAumtkuFcRVuPUvTX39pN8'),
            serumAsks: new PublicKey('8Lx9U9wdE3afdqih1mCAXy3unJDfzSaXFqAvoLMjhwoD'),
            serumEventQueue: new PublicKey('6o44a9xdzKKDNY7Ff2Qb129mktWbsCT4vKJcg2uk41uy'),
            serumCoinVault: new PublicKey('Ecfy8et9Mft9Dkavnuh4mzHMa2KWYUbBTA5oDZNoWu84'),
            serumPCVault: new PublicKey('hUgoKy5wjeFbZrXDW4ecr42T4F5Z1Tos31g68s5EHbP'),
            serumVaultSigner: new PublicKey('GVV4ZT9pccwy9d17STafFDuiSqFbXuRTdvKQ1zJX6ttX'),
        }
    },

    // 'CAVE-USDC':  {
    //     protocolVersion: 1,
    //     protocolSubVersion: 2,
    //
    //     programId: lyfRaydiumProgramId,
    //     tknMint0: tokens.usdcToken.mint,
    //     tknMint1: tokens.CAVE.mint,
    //     lpMint: new PublicKey("5Gba1k3fU7Vh7UtAiBmie9vhQNNq1JfEwgn1DPGZ7NKQ"),
    //     rewardMint: tokens.rayToken.mint,
    //     rewardMintB:  tokens.CAVE.mint,
    //
    //     strategyAccount: new PublicKey('53zVgALDfKobfQptkPP7UDBCk1rcM3PAKPzJQsvA6g6m'),
    //     strategyAuthority: new PublicKey('5ASxP1Cv1Fekwf5BmGtFMW1UrhCP62DzvdLGYntKnvsF'),
    //     strategyFarmInfo: new PublicKey('9EFySqsVu6p8GkxDA6J7uG69mEE1UBN8YGmrtKAjvHH6'),
    //     strategyTknAccount0: new PublicKey('9utxfje7D9ysSdM58X6dLLdQiHv141LFKNfdxmrREabK'),
    //     strategyTknAccount1: new PublicKey('3BFTJFLvPy7J7LqACLMbqsbS5H5EvwUk1LGYPtE672eS'),
    //     strategyLpAccount: new PublicKey('ByfyZPK6soyQzqby5nfhJ6KPf3ZfXJUG4bmookWebENU'),
    //     strategRewardAccount: new PublicKey('GcCZaQck2m2JHTnytqXZkZ5SBwqPHfPGAkUsNyTHkZ2m'),
    //     strategRewardAccountB: new PublicKey('3BFTJFLvPy7J7LqACLMbqsbS5H5EvwUk1LGYPtE672eS'),
    //     strategyBorrowCreditAccount0: new PublicKey('FUZRMkJZgVFsQ2et9uJVsoyUonxz1rTfYxhqzsRDMJ8B'),
    //     strategyBorrowCreditAccount1: new PublicKey('2q5NitfpqPSAcCm9pn5wCT4ndpKWN2gWRY9z7mTun1V6'),
    //
    //     strategyRewardsSwapTarget: new PublicKey("9utxfje7D9ysSdM58X6dLLdQiHv141LFKNfdxmrREabK"),
    //     strategyRewardsSwapTargetB: new PublicKey("9utxfje7D9ysSdM58X6dLLdQiHv141LFKNfdxmrREabK"),
    //
    //     stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,
    //
    //     lendingPoolConfig: {
    //         programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
    //         marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
    //         marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
    //         marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),
    //
    //         "0": {
    //             tknMint: tokens.usdcToken.mint,
    //             lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
    //             lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
    //             lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
    //             lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
    //             lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
    //             lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
    //             lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
    //         },
    //         "1":{
    //             tknMint: tokens.CAVE.mint,
    //             lendingPoolInfoAccount: new PublicKey('4hoQV8MoKnecGKuzvo29sR2jtkxkmiQHyzNXctZ3F9Ka'),
    //             lendingPoolTknAccount: new PublicKey('YsP7Jj2zdbyyAqjuSN7cVJSG38izimcJXvtdMJ639Ao'),
    //             lendingPoolFeeAccount: new PublicKey('YsP7Jj2zdbyyAqjuSN7cVJSG38izimcJXvtdMJ639Ao'),
    //             lendingPoolShareMint: new PublicKey('CYMKtPi9KmaGJVWm6A2v7zbR8ARh49r3qLPBbdFiVzf6'),
    //             lendingPoolShareAccount: new PublicKey('Dzg2xe7wcKeC5PF47Nv3hVfo9tXEch4cw6gobZRknhEs'),
    //             lendingPoolCreditMint: new PublicKey('Bby7VbTHvpseY7KFCwpRM5BnwVrhS9ReCaZNcHMcSV3i'),
    //             lendingPoolCreditAccount: new PublicKey('mBEqr9wEJR2fUFvjgzYCAKBQTaia7N5j2DQnFMgrtzP'),
    //         }
    //     },
    //     raydiumInfo: {
    //         raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
    //         ammId: new PublicKey("2PfKnjEfoUoVDbDS1YwvZ8HuPGBCpN831mnTuqTAJZjH"),
    //         ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
    //         ammOpenOrders: new PublicKey("ECG1LTHELj27wyKVz4DPCKdFB8mthqEwbnPeuUzkgz2H"),
    //         ammTargetOrders: new PublicKey("H4vuXiWxuKLec3TLrZk3QgJMsLH4Y2L6E9LosnefFMyR"),
    //
    //
    //         ammCoinAccount: new PublicKey("B1SCcyk4AqQcn6RY7Qjqj8rE53DDZ7N2eiqtMNcmfZxa"),
    //         ammPcAccount: new PublicKey("2HUjTaYw3mmU6kRA3ZfC4MGSzUhr2H6ZUQCWWdrfwUB6"),
    //         poolWithdrawQueue: new PublicKey("83z9iqzrGv3ZF1aQ14i4cfLGLJ2yH2uBByMQe2347EjB"),
    //         poolTempLpTokenAccount: new PublicKey("BNfk8c5CYcA7Cyg6iRNTBRwhEuhKARLD8toBzdxtmRJt"),
    //         serumProgramId: SERUM_PROGRAM_ID_V3,
    //         serumMarketId: new PublicKey("KrGK6ZHyE7Nt35D7GqAKJYAYUPUysGtVBgTXsJuAxMT"),
    //         serumBids: new PublicKey("73yb9Y8cZfxX8KV96dMXVp5tTfu4FVjPc9LchtrzEdUu"),
    //         serumAsks: new PublicKey("3sYKt1KYtB2Ycnf6jzNvnji8wUCWbsu9ZcA4DboiU1FH"),
    //         serumEventQueue: new PublicKey("D6PsDqCb5BbAhXfaLA9AtYz8SHLCUtdQSmozu7T4JGJe"),
    //         serumCoinVault: new PublicKey("2ZzE1FQixLYqw94htVYn99kSH1LE35De3d8XeWPnypte"),
    //         serumPCVault: new PublicKey("8oVmJ6vT6kMfWyRETDjuo4nAZZZC3KSNZBjsHzEDQDLD"),
    //         serumVaultSigner: new PublicKey("5bXbwUkB14na4uBAjG2u3PKx9BMV182T68EjgFV6duuz"),
    //
    //         stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
    //         stakePoolId: new PublicKey("FDnxy4NkJVG3GNMMrtUZmUmoYeYE34YRDwCYTi1yBTM"),
    //         stakePoolAuthority: new PublicKey("DadRztERbxMwvTzwnwst5VjVZCMJ3zL5J7ngvKWpvJoF"),
    //         stakePoolLpAccount: new PublicKey("6cxqxAYhLXzgYMBZC38xjY3b2sFux9TvLZejR5Vx7khc"),
    //         stakePoolRewardAccount: new PublicKey("8yCUztutwnW9FHfJTfsAZdJZ8j77G1CoCkTVdsRDtt7f"),
    //         stakePoolRewardAccountB: new PublicKey("49Y2DDJqjYFQHSgN1Zf2SUr7ktBrhyZooLPrdDe8xFwM"),
    //     },
    // },

    'GENE-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.GENE.mint,
        lpMint: new PublicKey("7GKvfHEXenNiWYbJBKae89mdaMPr5gGMYwZmyC8gBNVG"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.GENE.mint,

        lpDecimals: 9,

        strategyAccount: new PublicKey('55uhdYfH8zz6QnsVV8Lv74sZpL6T8uHuXCBDTnse1rsX'),
        strategyAuthority: new PublicKey('Dv4Ue38ZDWys3kgEmYsb9KVeFmrt4E4XdtMpDRu3GQ1H'),
        strategyFarmInfo: new PublicKey('6cuo6RA5r17h4B4zZxnSkvcRS6sW4hiqRbdd21YCTkH6'),
        strategyTknAccount0: new PublicKey('9d3mUd3WDteAxgBqg21AdEFjb6qbHpdSVJ17Ra3dnGf3'),
        strategyTknAccount1: new PublicKey('FvFRqqmxUNv5ZKXz3TSgTTfbtqhn2ATQJjrrjioDehnf'),
        strategyLpAccount: new PublicKey('7PKRyxJ8DPAcuwzbngyiRwRtjrDStPSFtTuzzwcoHdvA'),
        strategRewardAccount: new PublicKey('7A1BhjNkBqVTmMnZZ5BzdAfikSD5JBLaxnWA81YoBJAU'),
        strategRewardAccountB: new PublicKey('FvFRqqmxUNv5ZKXz3TSgTTfbtqhn2ATQJjrrjioDehnf'),
        strategyBorrowCreditAccount0: new PublicKey('ALa7RBscoAGTPWH82trPQjAyu476ohZmHEYb8BDxRajY'),
        strategyBorrowCreditAccount1: new PublicKey('H4ak78e5P9udPKddQDZky6mZw96WRZspoBNFmZA8WxXf'),

        strategyRewardsSwapTarget: new PublicKey("9d3mUd3WDteAxgBqg21AdEFjb6qbHpdSVJ17Ra3dnGf3"),
        strategyRewardsSwapTargetB: new PublicKey("9d3mUd3WDteAxgBqg21AdEFjb6qbHpdSVJ17Ra3dnGf3"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.GENE.mint,
                lendingPoolInfoAccount: new PublicKey('FrgyPPEPNC25ihob4ZobP3eYjh8uBoxLiobdMDX2EsMc'),
                lendingPoolTknAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
                lendingPoolFeeAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
                lendingPoolShareMint: new PublicKey('9z3eDHueAMdUtym9Q2ku3hi5YXHTYjpFLp1YEEnxUHPV'),
                lendingPoolShareAccount: new PublicKey('58teG2GNEoeYQUBa3VxQe5ZH5SPCZ6nUsrCuN5akbaQS'),
                lendingPoolCreditMint: new PublicKey('2KR5Q6zCik6kFyiWPMMVCKC5HDAP6joGNhKhbEv6nFdY'),
                lendingPoolCreditAccount: new PublicKey('7LBnkdaCZsM82t7G5MYKBoYAZetcnsqfU1cABxnPoquw'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("Enq8vJucRbkzKA1i1PahJNhMyUTzoVL5Cs8n5rC3NLGn"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("7dcfFNqaGnHrUB1bg1mEbvJsvsvfn7oamkpjDdt7ykUm"),
            ammTargetOrders: new PublicKey("FrJ5aM3Vi1DyxNfSbqq4vPYX3S9kH9foWMjqHjHGQq3E"),


            ammCoinAccount: new PublicKey("6yxszHV62pCjHtGijwgroqRXGVLuoiHUFhcEoHQepB91"),
            ammPcAccount: new PublicKey("6AovHvG7UovcavaJW6rEef728JtFV5adZ9MaNRBcX2nH"),
            poolWithdrawQueue: new PublicKey("J6YMSZfmy68QLH4R5gv5wasyF3pTVBF5CgkY6WaNwaBD"),
            poolTempLpTokenAccount: new PublicKey("7uNG8iCJNjN7xRDXAvb1afGAvd6GQitQ7K7chhTy43w5"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("FwZ2GLyNNrFqXrmR8Sdkm9DQ61YnQmxS6oobeH3rrLUM"),
            serumBids: new PublicKey("CQvBaGPpjn9aSM5VJYmXSxjrqG79aqF8wPAbuCSWhPtz"),
            serumAsks: new PublicKey("5R4k5QNxtN1zcAiCHR4h1FmmBdpajvF6EeR3kuoMYbu9"),
            serumEventQueue: new PublicKey("7MQzBut5taNSxbusoBnuuLB6Bmnfo6wm1Ukze5B13Uxd"),
            serumCoinVault: new PublicKey("AjKhS74QWgcatcJvHDS3fdCJq8BdAsrHxzcoNyT738Hy"),
            serumPCVault: new PublicKey("3xtHLByKqJzyvu3TbtDW8cnzJTbdRLKRjihWo1fVM5Fp"),
            serumVaultSigner: new PublicKey("CTWJZKgSwanoom2Bb9QiNKj6mrDtAMPFe2UUh8mZx9d5"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("DDRNVVJBEXEemcprVVUcrTbYnR88JyN6jjT2ypgAQHC8"),
            stakePoolAuthority: new PublicKey("9sdefPmehyrWqBPfn34PFcuKPYoxZ8Uy6g3436qr6jXk"),
            stakePoolLpAccount: new PublicKey("DAfAJVWGbZpLn7Tahwc9LuVukMKB5JSVQjdHRwXk44GV"),
            stakePoolRewardAccount: new PublicKey("tMh3bpXh2GaFLK2Buzav7niYAS81m7RigkhRn7p4wga"),
            stakePoolRewardAccountB: new PublicKey("JBi2SsBHGN969aGLpQxCLaRYaBa6U7LPShPYe23Je7oQ"),
        },
    },

    'GENE-RAY': {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.rayToken.mint,
        tknMint1: tokens.GENE.mint,
        lpMint: new PublicKey("3HzXnc1qZ8mGqun18Ck3KA616XnZNqF1RWbgYE2nGRMA"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB: tokens.GENE.mint,

        strategyAccount: new PublicKey('Ht83bHv2EXz37bGs8ZcnausHxacm37PMRKXTTbDbjcXR'),
        strategyAuthority: new PublicKey('9vbuuBvzUHJuDPs3zybpf6o9kMqM2G8PvV7Pcj49H37D'),
        strategyFarmInfo: new PublicKey('4XzcBzKXfyemGxSnMbCW3C7EFkeb1a8MZyvSvNwbsCwA'),
        strategyTknAccount0: new PublicKey('842nhkPG77T4svVxNb2xPD8G2uU2bTrjismqTEQGstV5'),
        strategyTknAccount1: new PublicKey('6ugsFKMQadYKvNs88N1r6FFPQkLjuwcW49jfooqasbZE'),
        strategyLpAccount: new PublicKey('2jGUpkSpcZhU5okQvMWQr1EyxtNCEXxgE2tCkUfcuF1f'),
        strategRewardAccount: new PublicKey('842nhkPG77T4svVxNb2xPD8G2uU2bTrjismqTEQGstV5'),
        strategRewardAccountB: new PublicKey('6ugsFKMQadYKvNs88N1r6FFPQkLjuwcW49jfooqasbZE'),
        strategyBorrowCreditAccount0: new PublicKey('GPU5eE9p5Wg8Ecqc28UiZKBG1TyDYhfDsNc4oZTSiGoZ'),
        strategyBorrowCreditAccount1: new PublicKey('GASEhkWnRsKRZhvXtcCBpgMVbAKCrYkS7BksUCZiLZG7'),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                lendingPoolInfoAccount: new PublicKey("ENZ7vdrvNGdAfVa8DoGpT2GrfoSFUtWKRoesf2dvqpuq"),
                lendingPoolTknAccount: new PublicKey("BUK8XbZeEqVULYRxGp4Va2R1BRqrYzXDrCVnWt6B7TZf"),
                lendingPoolFeeAccount: new PublicKey("C2HJD7r6NYCCVoXPPExxYEQ73LZJ3qmb5H13GnwMZfwa"),
                lendingPoolShareMint: new PublicKey("5uZERkJVyhCABEdocEssPZyMXYa8GJpLhngi95yXr9jc"),
                lendingPoolShareAccount: new PublicKey("GrVpvHCRkTHESGwyaj4gtNLn95NAdkBSnZbKusoFumup"),
                lendingPoolCreditMint: new PublicKey("GZqhoJhN1bz5Frq9GCaUSJ2nimnizXzHwsH12Qgh4YmR"),
                lendingPoolCreditAccount: new PublicKey("6EZzqDqfTfdoFF4KD1gmki3btEHfULK4SjNcuJMTEDUt"),
            },
            "1":{
                tknMint: tokens.GENE.mint,
                lendingPoolInfoAccount: new PublicKey('FrgyPPEPNC25ihob4ZobP3eYjh8uBoxLiobdMDX2EsMc'),
                lendingPoolTknAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
                lendingPoolFeeAccount: new PublicKey('A4UMfr97y35AvCaakKRAE5UBsb4UuvRQ2JiT23dyzDFu'),
                lendingPoolShareMint: new PublicKey('9z3eDHueAMdUtym9Q2ku3hi5YXHTYjpFLp1YEEnxUHPV'),
                lendingPoolShareAccount: new PublicKey('58teG2GNEoeYQUBa3VxQe5ZH5SPCZ6nUsrCuN5akbaQS'),
                lendingPoolCreditMint: new PublicKey('2KR5Q6zCik6kFyiWPMMVCKC5HDAP6joGNhKhbEv6nFdY'),
                lendingPoolCreditAccount: new PublicKey('7LBnkdaCZsM82t7G5MYKBoYAZetcnsqfU1cABxnPoquw'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("8FrCybrh7UFznP1hVHg8kXZ8bhii37c7BGzmjkdcsGJp"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("3qTqthYwuZKNQKruWJRGnubfXHU4MyGnvmoJcCbhELmn"),
            ammTargetOrders: new PublicKey("HwwQ3v5x3AdLopGFdQYZmwK7D5YURpFoDJcrbuZDsMHm"),

            lpDecimals: 9,

            ammCoinAccount: new PublicKey("FMxYRoHA3Xn4Su62GCwofmdALGdn4s16S5ZA4C91ULbX"),
            ammPcAccount: new PublicKey("3h7PhXbCAGvtQHqwTS2V3Mhc3fK8E5Hs8EbgCVHkQFwd"),
            poolWithdrawQueue: new PublicKey("HW7QPs33Fzw9uME7gqs8DRuvbdP24WFc8jfpBQaqdi5C"),
            poolTempLpTokenAccount: new PublicKey("CJbRPzdxPXEbyfM4YKinhojgmJv6yjcwaWpgvFYL4umz"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("DpFKTy69uZv2G6KW7b117axwQRSztH5g4gUtBPZ9fCS7"),
            serumBids: new PublicKey("DntegVqu4W73GAywDMnNNZv1RhzMnvg2ZG1SpEXiZCjb"),
            serumAsks: new PublicKey("CfTMiXZnDvVEyBAoXrNhf2mNBRJ5WCQh4JEwHXMoxh7o"),
            serumEventQueue: new PublicKey("CTe9iXRYZJ35xss1KsiFXJHS9w8638H7RKwt9WUdtznq"),
            serumCoinVault: new PublicKey("53zLrENukPYyMTgHtgLaPaSVUB15YphguocAC4b5nFbK"),
            serumPCVault: new PublicKey("4ZTZ5khpqH4jBELchj4g8kcDZUcpuyWmMkj6ajycwGRu"),
            serumVaultSigner: new PublicKey("SDSGfMSBFpUZWKZcsHSkLt7FGD4TQPjWNk2fux2asL6"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("GVfLbXA3dpEHPvc4do9HvMZ8TACxm3x54BVrHPMEixcr"),
            stakePoolAuthority: new PublicKey("FpAPnuT9FDpvzN33kF1cAK3vWMr6BqmnJoCTvqaSeGop"),
            stakePoolLpAccount: new PublicKey("9zu4NVcnWBxu4gXqVYE6bPoHD24TGDQo5VF1DmaXfAwx"),
            stakePoolRewardAccount: new PublicKey("B3ACepDzCv4dicf1GnbVs8fxn1GsoLQ8fD4jSZ1y5CK1"),
            stakePoolRewardAccountB: new PublicKey("8o8JzfSvGGdFLocyVYWJQ32hDLZhXMq3z7NBuusUxfSH"),
        },
    },

    'SONAR-USDC':  {
        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.SONAR.mint,
        lpMint: new PublicKey("2tAcfqJ1YYjpGLqwh76kyNt9VaNFDd4fJySfH6SmWfKt"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.SONAR.mint,

        strategyAccount: new PublicKey('FoqmqsVM1JvhYtjzb1pwS4tECCmz3cWVPjkB41tv1YHC'),
        strategyAuthority: new PublicKey('ERUmBYhNYNJCZ9vW77ofFNwQsQ2Yfyh6j3YTSVD6RkGP'),
        strategyFarmInfo: new PublicKey('Hwriq8hdxBxHCMHXenrkmTs9uEUswAbAnPfUAnUrHXhs'),
        strategyTknAccount0: new PublicKey('CXqHkQYq5xMSBtFPipotJV5qVGTms2Twg4oihPqXqLT9'),
        strategyTknAccount1: new PublicKey('2ryu12LAojzFJCRfhdWJMCf2EtVYs2vZ3uEWbaVvMY4J'),
        strategyLpAccount: new PublicKey('2SukdRjtH1r2FLg9TGQfZRxdLyw5m1yAsmaxQwZ7bAvs'),
        strategRewardAccount: new PublicKey('AUh8uGHK6PJabr1yVMXMdha1Kh4czifiEDZoRN58SzZA'),
        strategRewardAccountB: new PublicKey('2ryu12LAojzFJCRfhdWJMCf2EtVYs2vZ3uEWbaVvMY4J'),
        strategyBorrowCreditAccount0: new PublicKey('AdBPboyrhEhCp6Wcp6cTopkkzHscLHpD8Zs5DXtDVWst'),
        strategyBorrowCreditAccount1: new PublicKey('6LHPaMQsM8i1BSwNYoRyHYGSCeSX8ubXSNced8gATWr6'),

        strategyRewardsSwapTarget: new PublicKey("CXqHkQYq5xMSBtFPipotJV5qVGTms2Twg4oihPqXqLT9"),
        strategyRewardsSwapTargetB: new PublicKey("CXqHkQYq5xMSBtFPipotJV5qVGTms2Twg4oihPqXqLT9"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.SONAR.mint,
                lendingPoolInfoAccount: new PublicKey('3USSy3sAZSCnUiCZJaTFt5hCHWSw87kg8tNPaEZh1p9D'),
                lendingPoolTknAccount: new PublicKey('2F2yrLZQa3av7PxW7vdqiYBV4AwTbkCdswgN2BYGgtvs'),
                lendingPoolFeeAccount: new PublicKey('2F2yrLZQa3av7PxW7vdqiYBV4AwTbkCdswgN2BYGgtvs'),
                lendingPoolShareMint: new PublicKey('FvHrhBTTgo7q8uDX7gN5f7YzSXMrf3mwYtkay5NvkJzg'),
                lendingPoolShareAccount: new PublicKey('DPMixAHcMsryStgytYBhvvtR2WbvyRxkMwG147NmXEPS'),
                lendingPoolCreditMint: new PublicKey('HsKN1EC5zcArg1yoq1tMg7JKfxPW9m644mqCphrbLMC'),
                lendingPoolCreditAccount: new PublicKey('7zqtZ8LhBYUUXoDCwDFcdLgNkYo8tZZqTdoFJqAL5ie8'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("CrWbfKwyAaUfYctXWF9iaDUP4AH5t6k6bbaWnXBL8nHm"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("Ei23wxsu7WVsXv72yaTohSVASLqseinqA7DqXktprSSz"),
            ammTargetOrders: new PublicKey("NheF95jviuoA9Rv5QPQgXDT3oQUbyoHJcyY5yXAFFnh"),
            lpDecimals:  9,

            ammCoinAccount: new PublicKey("DQX9NhwznyWTYcTJ8uiqZP3PrzqRmfGNj4XNQzVKG8hW"),
            ammPcAccount: new PublicKey("AseLV5kWbAjNETCKJsXcrrs6ksvBefEPdRa7pKXFsvYE"),
            poolWithdrawQueue: new PublicKey("5mkppasqox6XpdcHhYAfM1GKTckQemqtANP85FphThw8"),
            poolTempLpTokenAccount: new PublicKey("9TjtDU6TMgHqAEdnUTBCgVJapGsqKnDTCFzDG2y4higa"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("9YdVSNrDsKDaGyhKL2nqEFKvxe3MSqMjmAvcjndVg1kj"),
            serumBids: new PublicKey("B6t3JoptHoNer3YgEUZASeQwcXEnhvGH4ovYeVdGW2c7"),
            serumAsks: new PublicKey("ACEdfnzBEFRopUkLwqowPuQpiMbuYR4uCk85wdxUvVWp"),
            serumEventQueue: new PublicKey("Vq6g4iaDJhqB8PeUPf99JixtpdQ6zrdXXNuQ2LrGyvV"),
            serumCoinVault: new PublicKey("EzMjpFVMZE4VrqbeGCXssfvDbpvHGMtHvkiLbX1YUTs7"),
            serumPCVault: new PublicKey("B8A7V1124ka8WVKDHyWMAgbHCaCdhbU7JHy2nB7e2o6E"),
            serumVaultSigner: new PublicKey("44rLzbRfxmpsmHPZUEuLS6rxv9pyDBVnzUSps8mGaEr2"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("5Mdq5o3KKPyeVVBsbnivVk9qCATjfEQ22oysXVsd2DvJ"),
            stakePoolAuthority: new PublicKey("7kUDK6QfnwkY2V1HuGHwqBiU3XroVmbDbGgjtVtGTW28"),
            stakePoolLpAccount: new PublicKey("3DpNmc28m7z18HVQp3CzmYjvoT5Snk7qFkNMJDz2GW8g"),
            stakePoolRewardAccount: new PublicKey("eH3XbcgLAC43CJgs9NnqDoVTfRNXXwA3nmYHnrR1GVe"),
            stakePoolRewardAccountB: new PublicKey("6mqPeL7aEwfiYLpDDRfb4ZjMe9sGN6gS7Vsa5exXyoC7"),
        },
    },

    'DFL-USDC':  {
        needsLiquidate: true,
        needsCompound: true,

        protocolVersion: 1,
        protocolSubVersion: 2,

        programId: lyfRaydiumProgramId,
        tknMint0: tokens.usdcToken.mint,
        tknMint1: tokens.DFL.mint,
        lpMint: new PublicKey("Fffijd6UVJdQeLVXhenS8YcsnMUdWJqpbBeH42LFkXgS"),
        rewardMint: tokens.rayToken.mint,
        rewardMintB:  tokens.DFL.mint,

        strategyAccount: new PublicKey('HWFB1zDgwYEzJfim6wBm3c2NsmMtNmtCg6sF7Gro8bRR'),
        strategyAuthority: new PublicKey('8ozRRCq1N4Z28rwvdvGgbLGTPBr9yhxyzbTW1FJ3tyGq'),
        strategyFarmInfo: new PublicKey('9W15fwuB7CzyUAV5jXjNxvQywjeHJCb8vPJpPAxjaB3F'),
        strategyTknAccount0: new PublicKey('GT6c9AmoXZnSypydhcT9LfPjCrcvGvtzwFm2xu2R7WBB'),
        strategyTknAccount1: new PublicKey('F16ziBj6GgPrZP4GrYr1o3BrEm3wuADxob4F6yoBAZM4'),
        strategyLpAccount: new PublicKey('H6gsWLbUrhinAKrY4u6ZpWHzMfFc6fVEwwH1gff8gzNY'),
        strategRewardAccount: new PublicKey('ABhXrUkk39h72mmCTxehdGqq696h2WJJe2muKqBPPiA8'),
        strategRewardAccountB: new PublicKey('F16ziBj6GgPrZP4GrYr1o3BrEm3wuADxob4F6yoBAZM4'),
        strategyBorrowCreditAccount0: new PublicKey('3Es36djvxbGWTaXnRm4QndNLJvS97XAade8inJQ9CNk2'),
        strategyBorrowCreditAccount1: new PublicKey('BJB5FNhmXvkBHCK9JcPJN9onBGczzWJCXbtpuk4UzFJB'),

        strategyRewardsSwapTarget: new PublicKey("GT6c9AmoXZnSypydhcT9LfPjCrcvGvtzwFm2xu2R7WBB"),
        strategyRewardsSwapTargetB: new PublicKey("GT6c9AmoXZnSypydhcT9LfPjCrcvGvtzwFm2xu2R7WBB"),

        stakeUserFarmInfoLayout: USER_STAKE_INFO_ACCOUNT_LAYOUT_V4,

        lendingPoolConfig: {
            programId: new PublicKey("FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj"),
            marketInfoAccount: new PublicKey("4XNif294wbrxj6tJ8K5Rg7SuaEACnu9s2L27i28MQB6E"),
            marketOwner : new PublicKey("7MBLg6oV5phip11YBbJPuq7u38kdzSi9PM3BifKSpLaR"),
            marketAuthority: new PublicKey("sCDiYj7X7JmXg5fVq2nqED2q1Wqjo7PnqMgH3casMem"),

            "0": {
                tknMint: tokens.usdcToken.mint,
                lendingPoolInfoAccount: new PublicKey("Hx6LbkMHe69DYawhPyVNs8Apa6tyfogfzQV6a7XkwBUU"),
                lendingPoolTknAccount: new PublicKey("CFp9kt8z3Epb1QSiEp3xA44KbSwuJxhFR3wQoerFqYS9"),
                lendingPoolFeeAccount: new PublicKey("CugsLyJk1Jghc7LkgvnFuUwshJhz1FE9mpkF7Z4acAMU"),
                lendingPoolShareMint: new PublicKey("62fDf5daUJ9jBz8Xtj6Bmw1bh1DvHn8AG4L9hMmxCzpu"),
                lendingPoolShareAccount: new PublicKey("Gyc1V1xbA9NjzuURE662ATw6W4AdhwvsL26yUnSGhbkz"),
                lendingPoolCreditMint: new PublicKey("CZ2s85dnuAVyGbRWBNauHZwj9oTV2i9xTvFwc1Cedr7E"),
                lendingPoolCreditAccount: new PublicKey("Bd71jEvypKFs8N5gByyhD2149tSqLy4PVAzFFShCTJTB"),
            },
            "1":{
                tknMint: tokens.DFL.mint,
                lendingPoolInfoAccount: new PublicKey('74fWq2xnHBP1W6QhLDazCZAuZvp9XY3ck1PGNJg9hfhi'),
                lendingPoolTknAccount: new PublicKey('5QNHLaujxMgFKYaJM55uYb3jyMGgvspizg7S5eVAD3d8'),
                lendingPoolFeeAccount: new PublicKey('5QNHLaujxMgFKYaJM55uYb3jyMGgvspizg7S5eVAD3d8'),
                lendingPoolShareMint: new PublicKey('CGhMaGeVLxxQGJh6Y2bEYfLazumuFyEXpxF1UgrcMRJi'),
                lendingPoolShareAccount: new PublicKey('EHUF88xvJZyXzosAQ7Jzx5ozdvxCfZuwppSEo5b9pe2S'),
                lendingPoolCreditMint: new PublicKey('26Eo8VcgDuNZSn8x5infdYxDKs7mYZj4JKxLUCkKP3DV'),
                lendingPoolCreditAccount: new PublicKey('GYZgKQmYZBosdS3PsSRv83CdPFAtTRXRZaqdFVUnumiw'),
            }
        },
        raydiumInfo: {
            raydiumProgramId: RAYDIUM_LIQUIDITY_POOL_PROGRAM_ID_V4,
            ammId: new PublicKey("8GJdzPuEBPP3BHJpcspBcfpRZV4moZMFwhTAuXebaPL8"),
            ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
            ammOpenOrders: new PublicKey("zZgp9gm6MCFSvub491ncJQ78zRF4WymJErhy2cR7nnU"),
            ammTargetOrders: new PublicKey("GKo4P3uofE47wug87QE6QGSRHa8wBLDEiW4nXEWeDUb4"),
            lpDecimals:  9,

            ammCoinAccount: new PublicKey("GteHVo2oJUJC2tFYe1QHS7MyasCVooPJdHfxwdF6hPZ2"),
            ammPcAccount: new PublicKey("FHqPtKCB2w9C94oupinMgykxuzjF6pQRVaBVNzqemXc7"),
            poolWithdrawQueue: new PublicKey("495s2Vr8PPXofHsJtkvazG77qNUHrhEpS86XkiFrTQgp"),
            poolTempLpTokenAccount: new PublicKey("6eXLVRMNEVFF7adfkbAQni537VrbPpR8LE3PEXbWxS67"),
            serumProgramId: SERUM_PROGRAM_ID_V3,
            serumMarketId: new PublicKey("9UBuWgKN8ZYXcZWN67Spfp3Yp67DKBq1t31WLrVrPjTR"),
            serumBids: new PublicKey("xNgA2EugkNq9M9yZeshGSbP7Epy85p8NHhrwkffYyAY"),
            serumAsks: new PublicKey("CcCDWuH5zW9577wtoMVUZU6PXoT5ZhiL5dadDo4124c5"),
            serumEventQueue: new PublicKey("9U9u5GLjbNNYaqECQATcMAuETbnh2QGjpJJVGoFxjLfm"),
            serumCoinVault: new PublicKey("CvCsGEAe3Lxwo7zQ5Acqd34jjpS1iFWKp9h9Vt2KExpj"),
            serumPCVault: new PublicKey("EGiCYaiiL65yx8uHkQKAmCv8U1fuDN4su6pSdsL3tQqB"),
            serumVaultSigner: new PublicKey("98fhGkizAxyzvsFZMAyt342wkNP6BGa8wfcHkJJURYrN"),

            stakePoolProgramId: RAYDIUM_STAKE_PROGRAM_ID_V5,
            stakePoolId: new PublicKey("AWbmotuJS7NLBmra9ctbfVR1BnoHmiG1HGW6hm49TuRZ"),
            stakePoolAuthority: new PublicKey("HphbMv737TNN9P5Q7fnfJSLKt88YBjKwF4ocv69cVvFE"),
            stakePoolLpAccount: new PublicKey("91LAgDBRbit1LP8aP9NKDN1PRKbThtcvid3zYTBzHR8f"),
            stakePoolRewardAccount: new PublicKey("5gJE2xtx9B23rReu35EZEHuxL1ZRHKAExL6u9VNLZhJ1"),
            stakePoolRewardAccountB: new PublicKey("ujQqfpP9JzqiMGrg7QeMnwfpcKGRqvJZxJAfxp74oWF"),
        },
    },
}
