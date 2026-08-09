# WebFusion 2.0 Engine Lab

This directory contains the virtual machine engine layer.

## Target Engine

QEMU-Wasm

## First Milestone

Boot a small x86-64 Linux guest inside the browser.

## Planned Architecture

Browser
↓
WebFusion Core
↓
Engine Adapter
↓
QEMU-Wasm
↓
x86-64 Virtual Machine
↓
Linux

## Important

The engine is intentionally separated from the UI.

This allows WebFusion to replace the underlying virtualization technology later.
