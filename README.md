# fp-demo-node
Intentionally vulnerable test fixture for false-positive (FP) detection demos. Do not deploy or reuse this code.

Mixed SAST + SCA fixture. Each file in `src/` has either a real finding (TP) or a safe look-alike (FP), as noted in its header. `package.json` pins old versions with known CVEs.
