# We will read the base file and then find an id
# Once we have found the id we will use that as the file name
# for reference later


import os.path

g_pageId = ""


# Solution found using SO
# http://stackoverflow.com/questions/6116978/python-replace-multiple-strings
def replace_all(text, dic):
    for i, j in dic.iteritems():
        text = text.replace(i, j)

    return text


def file_check(pageId):
    """
    If the file exists then we need not create another one.
    """
    return os.path.isfile("reference/" + pageId + ".js")


def generate_css(pageId):
    file_reader = open('static/base.css', 'r')

    content = file_reader.read()
    file_reader.close()

    replacements = {"#[main_div_id]": "#sd-"+pageId}

    new_file_content = replace_all(content, replacements)

    new_file_name = pageId + ".css"

    output_file = open("reference/" + new_file_name, 'w')
    output_file.write(new_file_content)


def generate_file(pageId, youtubeId, title, desc, random_number, imageId):
    """
    This will generate a js file with relevant information replaced
    and will return the path of the saved file so get_params
    can reference it later
    """
    global g_pageId
    g_pageId = pageId

#   If the file exists then we don't need to create another one.
#   Instead we can just return the existing file path and be done
    if(file_check(pageId)):
        return pageId + ".js"

    file_reader = open('static/base.js', 'r')

    content = file_reader.read()
    file_reader.close()

    replacements = {"[main_div_id]": "sd-"+pageId, "[desc]": desc,
                    "[youtubeId]": youtubeId, "[pageId]": pageId,
                    "[title]": title, "[imageId]": imageId}

    new_file_content = replace_all(content, replacements)

    new_file_name = pageId + ".js"

    output_file = open("reference/" + new_file_name, 'w')
    output_file.write(new_file_content)

    generate_css(pageId)

    return new_file_name


def generate_embed(path):

    js_src = "src=http://159.203.108.89:8000/api/"
    js_origin = " crossorigin=anonymous"

    js_script = "<script "+js_src+path+js_origin+"></script>"
    html_script = "\n<div id='sd-"+g_pageId+"'></div>"

    return html_script + js_script
