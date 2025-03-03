##Dataset

The dataset can be downloaded from Kaggle:

[Travel Dataset - Guide to India's Must-See Places](https://www.kaggle.com/datasets/saketk511/travel-dataset-guide-to-indias-must-see-places)

## Requirements

* Python
* pandas

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd weekend-travel-ranker`
3. Install dependencies: `pip install -r requirements.txt`

## Usage

1. Place the downloaded `Top Indian Places to Visit_.csv` file in the project directory.
2. Run the script: `Top_Indian_Places_to_Visit.py`
3. Enter a city name when prompted.

The script will output a ranked list of recommended weekend travel destinations based on the following criteria:

* Distance from the given city
* Place types
* Ratings and reviews

## Algorithm

The algorithm calculates a weighted score for each place based on:

* **Distance:** Closer places get higher scores.
* **Place Type Diversity:** A variety of place types is preferred.
* **Ratings and Reviews:** Places with higher ratings and positive reviews get higher scores.
The places are then ranked based on their overall scores.
