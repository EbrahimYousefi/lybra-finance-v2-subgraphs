import {
  Burn as BurnEvent,
  DepositAsset as DepositAssetEvent,
  DepositEther as DepositEtherEvent,
  FeeDistribution as FeeDistributionEvent,
  LSDValueCaptured as LSDValueCapturedEvent,
  LiquidationRecord as LiquidationRecordEvent,
  Mint as MintEvent,
  RigidRedemption as RigidRedemptionEvent,
  WithdrawAsset as WithdrawAssetEvent
} from "../generated/mappins/mappins"
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
} from "../generated/schema"

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.onBehalfOf = event.params.onBehalfOf
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositAsset(event: DepositAssetEvent): void {
  let entity = new DepositAsset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.onBehalfOf = event.params.onBehalfOf
  entity.asset = event.params.asset
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositEther(event: DepositEtherEvent): void {
  let entity = new DepositEther(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.onBehalfOf = event.params.onBehalfOf
  entity.asset = event.params.asset
  entity.etherAmount = event.params.etherAmount
  entity.assetAmount = event.params.assetAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeDistribution(event: FeeDistributionEvent): void {
  let entity = new FeeDistribution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeAddress = event.params.feeAddress
  entity.feeAmount = event.params.feeAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLSDValueCaptured(event: LSDValueCapturedEvent): void {
  let entity = new LSDValueCaptured(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stETHAdded = event.params.stETHAdded
  entity.payoutEUSD = event.params.payoutEUSD
  entity.discountRate = event.params.discountRate
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidationRecord(event: LiquidationRecordEvent): void {
  let entity = new LiquidationRecord(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.keeper = event.params.keeper
  entity.onBehalfOf = event.params.onBehalfOf
  entity.eusdamount = event.params.eusdamount
  entity.liquidateEtherAmount = event.params.liquidateEtherAmount
  entity.keeperReward = event.params.keeperReward
  entity.superLiquidation = event.params.superLiquidation
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.onBehalfOf = event.params.onBehalfOf
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRigidRedemption(event: RigidRedemptionEvent): void {
  let entity = new RigidRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.provider = event.params.provider
  entity.eusdAmount = event.params.eusdAmount
  entity.collateralAmount = event.params.collateralAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawAsset(event: WithdrawAssetEvent): void {
  let entity = new WithdrawAsset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.asset = event.params.asset
  entity.onBehalfOf = event.params.onBehalfOf
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
