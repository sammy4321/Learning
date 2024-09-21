from multiprocessing import Process, Queue

def square_numbers(numbers, queue):
    for i in numbers:
        queue.put(i * i)

if __name__ == "__main__":
    numbers = range(5)
    queue = Queue()
    processes = [Process(target=square_numbers, args=(numbers, queue)) for _ in range(4)]
    
    for p in processes:
        p.start()
    for p in processes:
        p.join()

    while not queue.empty():
        print(queue.get())
