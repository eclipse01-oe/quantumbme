## GitHub Copilot Chat

- Extension Version: 0.27.1 (prod)
- VS Code: vscode/1.100.2
- OS: Windows

## Network

User Settings:

```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 140.82.121.5 (3062 ms)
- DNS ipv6 Lookup: Error (6902 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (12 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: HTTP 200 (9712 ms)
- Node.js fetch: HTTP 200 (7317 ms)
- Helix fetch: HTTP 200 (9763 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.112.21 (2724 ms)
- DNS ipv6 Lookup: Error (4867 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (3 ms)
- Electron fetch (configured): HTTP 200 (4203 ms)
- Node.js https: HTTP 200 (2108 ms)
- Node.js fetch: HTTP 200 (4711 ms)
- Helix fetch: HTTP 200 (4290 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
