import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { handleBurn } from "../src/mappins"
import { createBurnEvent } from "./mappins-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sponsor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let onBehalfOf = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newBurnEvent = createBurnEvent(sponsor, onBehalfOf, amount, timestamp)
    handleBurn(newBurnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Burn created and stored", () => {
    assert.entityCount("Burn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sponsor",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "onBehalfOf",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
