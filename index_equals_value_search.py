def index_equals_value_search(arr):
  if not arr or len(arr) == 0: return -1
  start, end = 0, len(arr) - 1

  while  start <= end:
    i = (start+end)/2
    if arr[i] < i: start = i+1
    elif arr[i] > i: end = i-1
    else: return i

  return -1