import asyncio
import aiohttp

async def download_site(session, url):
    async with session.get(url) as response:
        print(f"{url}: {response.status}")

async def download_all_sites(sites):
    async with aiohttp.ClientSession() as session:
        tasks = [download_site(session, site) for site in sites]
        await asyncio.gather(*tasks)

sites = ["https://example.com", "https://example.org", "https://example.net"]
asyncio.run(download_all_sites(sites))


# The execution order of the asynchronous Python code provided for downloading web pages using aiohttp and asyncio can be detailed as follows, highlighting the non-blocking nature of asynchronous operations:

# 1. Start the Event Loop: The asyncio.run(download_all_sites(sites)) call initiates the asyncio event loop. The event loop is the core of the asynchronous execution, handling the registration and scheduling of tasks.
# 2. Create Session and Tasks: Inside download_all_sites(sites), an asynchronous context manager (async with aiohttp.ClientSession() as session) is used to create a session. This session is utilized to manage connections throughout the execution of all tasks.
# 3. Task Creation: The list comprehension [download_site(session, site) for site in sites] constructs a list of coroutine objects. Each download_site(session, site) is a coroutine that, when executed, will fetch content from the given URL using the session created.
# 4. Scheduling Tasks: asyncio.gather(*tasks) is called, which is a built-in function that schedules the given coroutine objects to run concurrently. At this point, all the download_site tasks are handed over to the event loop, which will manage their execution.
# 5. Concurrent Execution: Each download_site coroutine performs an asynchronous GET request with async with session.get(url) as response. This line executes non-blockingly; the event loop continues to run other tasks (or remain idle) while waiting for the network response. The async with construct ensures that resources are properly managed (e.g., the response is closed when the block exits).
# 6. Handling Responses: Once the response for a request is received, the event loop resumes the execution of the corresponding download_site coroutine, which then prints the status of the response.
# 7.Completion: After all coroutines in asyncio.gather() are completed, download_all_sites finishes its execution, and asyncio.run() cleans up by closing the event loop.

