import asyncio
import aiohttp

async def download_site(session, url):
    async with session.get(url) as response:
        content = await response.text()  # Get the text content of the response
        return (url, response.status, content)  # Return a tuple with URL, status, and content

async def download_all_sites(sites):
    async with aiohttp.ClientSession() as session:
        tasks = [download_site(session, site) for site in sites]
        results = await asyncio.gather(*tasks)  # This gathers all results into a list of tuples
        return results  # Return the combined results

sites = ["https://example.com", "https://example.org", "https://example.net"]
result = asyncio.run(download_all_sites(sites))
print(result)  # Print the combined result


# The execution order of the asynchronous Python code provided for downloading web pages using aiohttp and asyncio can be detailed as follows, highlighting the non-blocking nature of asynchronous operations:

# 1. Start the Event Loop: The asyncio.run(download_all_sites(sites)) call initiates the asyncio event loop. The event loop is the core of the asynchronous execution, handling the registration and scheduling of tasks.
# 2. Create Session and Tasks: Inside download_all_sites(sites), an asynchronous context manager (async with aiohttp.ClientSession() as session) is used to create a session. This session is utilized to manage connections throughout the execution of all tasks.
# 3. Task Creation: The list comprehension [download_site(session, site) for site in sites] constructs a list of coroutine objects. Each download_site(session, site) is a coroutine that, when executed, will fetch content from the given URL using the session created.
# 4. Scheduling Tasks: asyncio.gather(*tasks) is called, which is a built-in function that schedules the given coroutine objects to run concurrently. At this point, all the download_site tasks are handed over to the event loop, which will manage their execution.
# 5. Concurrent Execution: Each download_site coroutine performs an asynchronous GET request with async with session.get(url) as response. This line executes non-blockingly; the event loop continues to run other tasks (or remain idle) while waiting for the network response. The async with construct ensures that resources are properly managed (e.g., the response is closed when the block exits).
# 6. Handling Responses: Once the response for a request is received, the event loop resumes the execution of the corresponding download_site coroutine, which then prints the status of the response.
# 7.Completion: After all coroutines in asyncio.gather() are completed, download_all_sites finishes its execution, and asyncio.run() cleans up by closing the event loop.

# Async Code explanation : 
# 1. List of Sites
# We start with the list of sites: sites = ["https://example.com", "https://example.org", "https://example.net"]
# 2. Starting the Event Loop
# The program begins by calling asyncio.run(download_all_sites(sites)). This starts the event loop, which will manage the concurrent execution of tasks (downloading from multiple sites) : result = asyncio.run(download_all_sites(sites))
# 3. Creating the Session
# The download_all_sites function is called with the list of sites. Inside this function, the following happens:
#     async def download_all_sites(sites):
#         async with aiohttp.ClientSession() as session:
# 4. Creating Tasks for Each Site : 
# Next, we create a list of tasks, where each task corresponds to downloading content from a different site. This is done using a list comprehension: tasks = [download_site(session, site) for site in sites]
# 5. Executing the Tasks Concurrently
# Once the tasks are created, we use asyncio.gather(*tasks) to start executing them concurrently: results = await asyncio.gather(*tasks)
# For Site: https://example.com
# Download Site Function:
#     async def download_site(session, url):
#         async with session.get(url) as response:
#             content = await response.text()  # Get the text content of the response
#             return (url, response.status, content)
# The function makes an asynchronous GET request to https://example.com using the shared session.
# While waiting for the network to respond, the function yields control back to the event loop, allowing it to run other tasks (like downloading from the other sites).
# Response Received: Once the response is received from https://example.com, the code resumes execution.
# The await response.text() line reads the response content asynchronously. This is also non-blocking, so if reading the content takes time, control is passed back to the event loop.
# Finally, the function returns a tuple containing:
#     The URL (https://example.com)
#     The HTTP status code (e.g., 200 for a successful response)
#     The text content of the webpage.
# For Site: https://example.org
# The same steps are followed as with the first site. The function sends an asynchronous GET request to https://example.org, waits for the response, reads the content, and returns the corresponding tuple.
# For Site: https://example.net
# Similarly, an asynchronous request is sent to https://example.net. The process is the same: make the request, wait for the response, retrieve the content, and return the tuple.
# 6. Gathering Results : 
# Once all tasks complete (i.e., all sites have responded and their content has been read), the asyncio.gather(*tasks) call returns a list of results: results = await asyncio.gather(*tasks)
# The results list contains a tuple for each site. For example:
#     [
#         ("https://example.com", 200, "HTML content from example.com"),
#         ("https://example.org", 200, "HTML content from example.org"),
#         ("https://example.net", 200, "HTML content from example.net")
#     ]