import sys

def search_replace(search_string, replace_string, file_location):
    with open(file_location, 'r') as file:
        file_content = file.read()

    updated_content = file_content.replace(search_string, replace_string)

    with open(file_location, 'w') as file:
        file.write(updated_content)

search_string = sys.argv[1]
replace_string = sys.argv[2]
file_location = sys.argv[3]

search_replace(search_string, replace_string, file_location)
