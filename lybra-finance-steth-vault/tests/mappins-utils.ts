import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Burn,
  DepositAsset,
  DepositEther,
  FeeDistribution,
  LSDValueCaptured,
  LiquidationRecord,
  Mint,
  RigidRedemption,
  WithdrawAsset
} from "../generated/mappins/mappins"

export function createBurnEvent(
  sponsor: Address,
  onBehalfOf: Address,
  amount: BigInt,
  timestamp: BigInt
): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return burnEvent
}

export function createDepositAssetEvent(
  onBehalfOf: Address,
  asset: Address,
  amount: BigInt,
  timestamp: BigInt
): DepositAsset {
  let depositAssetEvent = changetype<DepositAsset>(newMockEvent())

  depositAssetEvent.parameters = new Array()

  depositAssetEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  depositAssetEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  depositAssetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositAssetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return depositAssetEvent
}

export function createDepositEtherEvent(
  onBehalfOf: Address,
  asset: Address,
  etherAmount: BigInt,
  assetAmount: BigInt,
  timestamp: BigInt
): DepositEther {
  let depositEtherEvent = changetype<DepositEther>(newMockEvent())

  depositEtherEvent.parameters = new Array()

  depositEtherEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  depositEtherEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  depositEtherEvent.parameters.push(
    new ethereum.EventParam(
      "etherAmount",
      ethereum.Value.fromUnsignedBigInt(etherAmount)
    )
  )
  depositEtherEvent.parameters.push(
    new ethereum.EventParam(
      "assetAmount",
      ethereum.Value.fromUnsignedBigInt(assetAmount)
    )
  )
  depositEtherEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return depositEtherEvent
}

export function createFeeDistributionEvent(
  feeAddress: Address,
  feeAmount: BigInt,
  timestamp: BigInt
): FeeDistribution {
  let feeDistributionEvent = changetype<FeeDistribution>(newMockEvent())

  feeDistributionEvent.parameters = new Array()

  feeDistributionEvent.parameters.push(
    new ethereum.EventParam(
      "feeAddress",
      ethereum.Value.fromAddress(feeAddress)
    )
  )
  feeDistributionEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )
  feeDistributionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeDistributionEvent
}

export function createLSDValueCapturedEvent(
  stETHAdded: BigInt,
  payoutEUSD: BigInt,
  discountRate: BigInt,
  timestamp: BigInt
): LSDValueCaptured {
  let lsdValueCapturedEvent = changetype<LSDValueCaptured>(newMockEvent())

  lsdValueCapturedEvent.parameters = new Array()

  lsdValueCapturedEvent.parameters.push(
    new ethereum.EventParam(
      "stETHAdded",
      ethereum.Value.fromUnsignedBigInt(stETHAdded)
    )
  )
  lsdValueCapturedEvent.parameters.push(
    new ethereum.EventParam(
      "payoutEUSD",
      ethereum.Value.fromUnsignedBigInt(payoutEUSD)
    )
  )
  lsdValueCapturedEvent.parameters.push(
    new ethereum.EventParam(
      "discountRate",
      ethereum.Value.fromUnsignedBigInt(discountRate)
    )
  )
  lsdValueCapturedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return lsdValueCapturedEvent
}

export function createLiquidationRecordEvent(
  provider: Address,
  keeper: Address,
  onBehalfOf: Address,
  eusdamount: BigInt,
  liquidateEtherAmount: BigInt,
  keeperReward: BigInt,
  superLiquidation: boolean,
  timestamp: BigInt
): LiquidationRecord {
  let liquidationRecordEvent = changetype<LiquidationRecord>(newMockEvent())

  liquidationRecordEvent.parameters = new Array()

  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam("keeper", ethereum.Value.fromAddress(keeper))
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "eusdamount",
      ethereum.Value.fromUnsignedBigInt(eusdamount)
    )
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "liquidateEtherAmount",
      ethereum.Value.fromUnsignedBigInt(liquidateEtherAmount)
    )
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "keeperReward",
      ethereum.Value.fromUnsignedBigInt(keeperReward)
    )
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "superLiquidation",
      ethereum.Value.fromBoolean(superLiquidation)
    )
  )
  liquidationRecordEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return liquidationRecordEvent
}

export function createMintEvent(
  sponsor: Address,
  onBehalfOf: Address,
  amount: BigInt,
  timestamp: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return mintEvent
}

export function createRigidRedemptionEvent(
  caller: Address,
  provider: Address,
  eusdAmount: BigInt,
  collateralAmount: BigInt,
  timestamp: BigInt
): RigidRedemption {
  let rigidRedemptionEvent = changetype<RigidRedemption>(newMockEvent())

  rigidRedemptionEvent.parameters = new Array()

  rigidRedemptionEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  rigidRedemptionEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  rigidRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "eusdAmount",
      ethereum.Value.fromUnsignedBigInt(eusdAmount)
    )
  )
  rigidRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount",
      ethereum.Value.fromUnsignedBigInt(collateralAmount)
    )
  )
  rigidRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return rigidRedemptionEvent
}

export function createWithdrawAssetEvent(
  sponsor: Address,
  asset: Address,
  onBehalfOf: Address,
  amount: BigInt,
  timestamp: BigInt
): WithdrawAsset {
  let withdrawAssetEvent = changetype<WithdrawAsset>(newMockEvent())

  withdrawAssetEvent.parameters = new Array()

  withdrawAssetEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  withdrawAssetEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  withdrawAssetEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  withdrawAssetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawAssetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return withdrawAssetEvent
}
