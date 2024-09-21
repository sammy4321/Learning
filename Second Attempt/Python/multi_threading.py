import threading
import requests

def download_site(url):
    response = requests.get(url)
    print(f"{url}: {len(response.content)} bytes")

def download_all_sites(sites):
    threads = [threading.Thread(target=download_site, args=(site,)) for site in sites]
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join()

sites = ["https://example.com", "https://example.org", "https://example.net"]
download_all_sites(sites)

# The start() method is used to initiate a thread. When you create a thread instance, it doesn't begin executing immediately. Instead, start() needs to be called on the thread object to tell the operating system to start running the thread. 
# The join() method is used when one thread needs to wait for another thread to finish its execution. Calling join() on a thread object tells the calling thread (often the main thread) to "pause" and wait until the thread on which join() has been called completes. 
# Example with Tread Pool Executor : 

import concurrent.futures
import time

def sleep_and_return(seconds):
    time.sleep(seconds)
    return f"Rested for {seconds} seconds"

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    # Submit tasks to the executor
    futures = [executor.submit(sleep_and_return, seconds=i) for i in range(5)]
    
    # As each future completes, its result is printed
    for future in concurrent.futures.as_completed(futures):
        print(future.result())
