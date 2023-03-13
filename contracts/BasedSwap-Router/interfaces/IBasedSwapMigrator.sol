// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

interface IBasedSwapMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
