

from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/api/chat", methods="POST")



if __name__ == "__main__":
    app.run(port=8080, debug=True)



















































# # // ┌─────────────────────────────────────┐
# # // │ Enter text...                       │
# # // │                                     │
# # // │ The quick brown fox jumps           │
# # // │                                     │
# # // └─────────────────────────────────────┘

# # //              [ Analyze ]

# # // Characters: 29
# # // Words: 5
# # // Vowels: 7
# # // Consonants: 17

# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route("/api/count", methods=["POST"])
# def counter_y():
#     incoming = request.json
#     sentence = incoming["sentence"].lower()

#     #character count, consonant and vowels count
#     words = sentence.split(" ")
#     cc = 0
#     vw = 0
#     cs = 0
#     for i in words:
#         cc += len(i)
#         for j in i:
#             if j in "aeiou":
#                 vw += 1
#             else:
#                 cs +=1
#     #words count
#     wc = len(words)
#     #put results in list
#     result_list = [cc,wc,vw,cs]
    
#     return jsonify({
#         "result": result_list
#     })

# if __name__ == "__main__":
#     app.run(port="8080", debug=True)
    


    

    



































# # from flask import Flask, request, jsonify
# # from flask_cors import CORS 

# # site = Flask(__name__) #our app initialation
# # CORS(site) # to make the browser allow req and response by react

# # @site.route("/api/count", methods = ["POST"])
# # def count_of_words():
# #     data = request.json
# #     text = data["text"]

# #     count = 0
# #     for i in text:
# #         count += 1
# #     return jsonify({
# #         "result": count
# #     })

# # if __name__ == "__main__":
# #     site.run(port = "5000",debug = True )

    

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)


# # @app.route("/api/reverse", methods=["POST"])
# # def reverse_name():

# #     data = request.json
# #     name = data["name"]

# #     reversed_name = name[::-1]

# #     return jsonify({
# #         "result": reversed_name
# #     })


# # if __name__ == "__main__":
# #     app.run(port=5000, debug=True)