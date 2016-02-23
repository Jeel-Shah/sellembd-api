# We will read the base file and then find an id
# Once we have found the id we will use that as the file name
# for reference later


# Solution found using SO
# http://stackoverflow.com/questions/6116978/python-replace-multiple-strings
def replace_all(text, dic):
    for i, j in dic.iteritems():
        text = text.replace(i, j)

    return text


def generate_file(pageId, youtubeId, title, desc, random_number):
    """
    This will generate a js file with relevant information replaced
    and will return the path of the saved file so get_params
    can reference it later
    """
    file_reader = open('static/base.js', 'r')

    content = file_reader.read()
    file_reader.close()

    replacements = {"[main_div_id]": random_number, "[desc]": desc,
                    "[youtubeId]": youtubeId, "[pageId]": pageId,
                    "[title]": title}

    new_file_content = replace_all(content, replacements)

    new_file_name = "reference/" + pageId + ".js"

    output_file = open(new_file_name, 'w')
    output_file.write(new_file_content)

    return new_file_name

generate_file("12345678", "KCRIBIusg48", "Painting Roses", "Great!", "64528")
