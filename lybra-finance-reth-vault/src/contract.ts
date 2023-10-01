import {
  Burn as BurnEvent,
  DepositAsset as DepositAssetEvent,
  DepositEther as DepositEtherEvent,
  FeeDistribution as FeeDistributionEvent,
  LiquidationRecord as LiquidationRecordEvent,
  Mint as MintEvent,
  RigidRedemption as RigidRedemptionEvent,
  WithdrawAsset as WithdrawAssetEvent
} from "../generated/Contract/Contract"
import {
  Burn,
  DepositAsset,
  DepositEther,
  FeeDistribution,
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

export function handleLiquidationRecord(event: LiquidationRecordEvent): void {
  let entity = new LiquidationRecord(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.keeper = event.params.keeper
  entity.onBehalfOf = event.params.onBehalfOf
  entity.eusdamount = event.params.eusdamount
  entity.LiquidateAssetAmount = event.params.LiquidateAssetAmount
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
  entity.peusdAmount = event.params.peusdAmount
  entity.assetAmount = event.params.assetAmount
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
