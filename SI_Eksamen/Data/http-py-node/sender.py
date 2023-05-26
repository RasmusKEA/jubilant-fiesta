import http.client

# Define the request parameters
host = 'localhost'
port = 3000
url = '/api/endpoint'
payload = 'key=value'  # Data to send in the request (optional)

# Create an HTTP connection
conn = http.client.HTTPConnection(host, port)

# Send a GET request
conn.request('GET', url)
response = conn.getresponse()
print(response.read().decode())

# Send a POST request with payload
conn.request('POST', url, body=payload)
response = conn.getresponse()
print(response.read().decode())

# Close the connection
conn.close()
