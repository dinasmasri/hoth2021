# Predicition-Based Model and React Code

# # #Includes code for the cosine similarity prediction model I built for our hack, as well as the data gathered and generated by Tanaya for use in the model. Likewise includes React native code I compiled for the  interactive Home and Search components of our app

# #A brief description of the Prediciton-Based Model: 

We decided to implement a content-based recommendation system that would recommend products to the user based on previously favorited items.  This model was built using Juptyr Notebooks  and the Pandas package in Python. For the purposes of this small hack, we decided to keep the model simple. Thus, the user is recommended "similar" products to ones they have favorited previously based on semantic similarity in key words.

For the purposes of this small hack, we did not create a robust profile implementation. The profile is pre-generated. Thus, the model is pre-computed before connecting to the data components of our UI.

Instead, let's assume our pre-generated user had favorited an entry of "white sneakers" in the past. 

The model then runs on the entry of "white sneakers" and generates five reccomendations based on this. The results of the model are sent to CSV and uploaded to AirTable. From there, I created a RESTFUL API that links the model's results to the  "You Might Also Like" tab in our Profile tab in the UI. 

# #A Brief Description of the React Code:

In our prototyper, Framer, I implemented code using React Native that integrates our data components to the various scroll and search grids on our UI screen, using a RESTFUL API of our generated data made using Airtable. The code modifies the data components to facilitate integration.
