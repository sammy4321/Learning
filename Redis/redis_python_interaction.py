import redis

# Connect to the Redis server
r = redis.Redis(
    host='localhost',  # Replace with your Redis server's IP or hostname
    port=6379,         # Default Redis port
    db=0               # Default database
)

# Write data to Redis
r.set('key1', 'value1')
r.set('key2', 'value2')

# Read data from Redis
value1 = r.get('key1')
value2 = r.get('key2')

print(f"Key1: {value1.decode('utf-8')}")
print(f"Key2: {value2.decode('utf-8')}")

# Example of incrementing a value in Redis
r.set('counter', 1)
r.incr('counter')  # Increment the counter by 1
counter_value = r.get('counter')
print(f"Counter value: {counter_value.decode('utf-8')}")

# Example of storing a Python dictionary in Redis
user_data = {
    'name': 'Alice',
    'age': 30,
    'email': 'alice@example.com'
}

# Store the dictionary as a hash
r.hmset('user:1000', user_data)

# Retrieve the hash
user_data_retrieved = r.hgetall('user:1000')

# Convert byte strings to regular strings
user_data_retrieved = {k.decode('utf-8'): v.decode('utf-8') for k, v in user_data_retrieved.items()}

print("User data retrieved from Redis:")
print(user_data_retrieved)
