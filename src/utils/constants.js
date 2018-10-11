import { utils } from 'ethers'

export const ether = utils.bigNumberify('1000000000000000000')

export const ALLOWANCE_MINIMUM = utils.bigNumberify("10000000000") // in ether
export const ALLOWANCE_THRESHOLD = ether.mul(ether) // in wei