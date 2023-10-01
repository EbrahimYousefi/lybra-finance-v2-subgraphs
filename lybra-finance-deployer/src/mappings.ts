import {
  Approval as ApprovalEvent,
  BorrowApyChanged as BorrowApyChangedEvent,
  Burn as BurnEvent,
  DepositEther as DepositEtherEvent,
  ESLBRMinterChanged as ESLBRMinterChangedEvent,
  FeeDistribution as FeeDistributionEvent,
  GovernanceAuthorityTransfer as GovernanceAuthorityTransferEvent,
  KeeperRateChanged as KeeperRateChangedEvent,
  LSDistribution as LSDistributionEvent,
  LiquidationRecord as LiquidationRecordEvent,
  Mint as MintEvent,
  RedemptionFeeChanged as RedemptionFeeChangedEvent,
  RedemptionProvider as RedemptionProviderEvent,
  RigidRedemption as RigidRedemptionEvent,
  SafeCollateralRateChanged as SafeCollateralRateChangedEvent,
  ServiceFeePoolChanged as ServiceFeePoolChangedEvent,
  SharesBurnt as SharesBurntEvent,
  Transfer as TransferEvent,
  TransferShares as TransferSharesEvent,
  WithdrawEther as WithdrawEtherEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  BorrowApyChanged,
  Burn,
  DepositEther,
  ESLBRMinterChanged,
  FeeDistribution,
  GovernanceAuthorityTransfer,
  KeeperRateChanged,
  LSDistribution,
  LiquidationRecord,
  Mint,
  RedemptionFeeChanged,
  RedemptionProvider,
  RigidRedemption,
  SafeCollateralRateChanged,
  ServiceFeePoolChanged,
  SharesBurnt,
  Transfer,
  TransferShares,
  WithdrawEther
} from "../generated/schema"

import { BigInt } from '@graphprotocol/graph-ts'

import { DailyDepositEther } from "../generated/schema"


export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBorrowApyChanged(event: BorrowApyChangedEvent): void {
  let entity = new BorrowApyChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newApy = event.params.newApy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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

export function handleDepositEther(event: DepositEtherEvent): void {
  let entity = new DepositEther(
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

export function handleESLBRMinterChanged(event: ESLBRMinterChangedEvent): void {
  let entity = new ESLBRMinterChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
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

export function handleGovernanceAuthorityTransfer(
  event: GovernanceAuthorityTransferEvent
): void {
  let entity = new GovernanceAuthorityTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newGov = event.params.newGov

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKeeperRateChanged(event: KeeperRateChangedEvent): void {
  let entity = new KeeperRateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSlippage = event.params.newSlippage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLSDistribution(event: LSDistributionEvent): void {
  let entity = new LSDistribution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stETHAdded = event.params.stETHAdded
  entity.payoutEUSD = event.params.payoutEUSD
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
  entity.LiquidateEtherAmount = event.params.LiquidateEtherAmount
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

export function handleRedemptionFeeChanged(
  event: RedemptionFeeChangedEvent
): void {
  let entity = new RedemptionFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSlippage = event.params.newSlippage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemptionProvider(event: RedemptionProviderEvent): void {
  let entity = new RedemptionProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.status = event.params.status

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
  entity.etherAmount = event.params.etherAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeCollateralRateChanged(
  event: SafeCollateralRateChangedEvent
): void {
  let entity = new SafeCollateralRateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRatio = event.params.newRatio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleServiceFeePoolChanged(
  event: ServiceFeePoolChangedEvent
): void {
  let entity = new ServiceFeePoolChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSharesBurnt(event: SharesBurntEvent): void {
  let entity = new SharesBurnt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.preRebaseTokenAmount = event.params.preRebaseTokenAmount
  entity.postRebaseTokenAmount = event.params.postRebaseTokenAmount
  entity.sharesAmount = event.params.sharesAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferShares(event: TransferSharesEvent): void {
  let entity = new TransferShares(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.sharesValue = event.params.sharesValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawEther(event: WithdrawEtherEvent): void {
  let entity = new WithdrawEther(
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

export function getDailyTradeVolume(timestamp: BigInt): DailyDepositEther {
    let interval = BigInt.fromI32(60 * 60 * 24)
    let day = timestamp.div(interval).times(interval)
    let id = pool.id + '-day-' + day.toString()

    let volume = DailyVolume.load(id)

    if (volume == null) {
        volume = new DailyVolume(id)
        volume.pool = pool.id
        volume.timestamp = day
        volume.volume = decimal.ZERO
    }

    return volume!
}
