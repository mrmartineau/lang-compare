---
title: Concurrency
order: 17
---

**GIL limits true thread parallelism** for CPU work. Use `asyncio` for I/O concurrency, `multiprocessing` for CPU parallelism.

```python
# asyncio — async/await for I/O concurrency
import asyncio

async def fetch_data(url: str) -> str:
    # simulated async I/O
    await asyncio.sleep(1)
    return f"data from {url}"

async def main():
    # Run concurrently
    results = await asyncio.gather(
        fetch_data("/api/a"),
        fetch_data("/api/b"),
        fetch_data("/api/c"),
    )
    print(results)

asyncio.run(main())
```

```python
# Threading — concurrent I/O (GIL limits CPU work)
from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(max_workers=4) as pool:
    futures = [pool.submit(fetch, url) for url in urls]
    results = [f.result() for f in futures]

# Multiprocessing — true CPU parallelism (separate processes)
from multiprocessing import Pool

with Pool(4) as pool:
    results = pool.map(cpu_heavy_task, data)

# Python 3.13+ free-threading (experimental)
# Run without GIL: python3.13t -X gil=0 script.py
```

