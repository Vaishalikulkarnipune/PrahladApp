from flask import Flask, request, jsonify
import psycopg2
from config import get_db_connection, release_db_connection
from werkzeug.security import generate_password_hash, check_password_hash
import re
from flask_cors import CORS
import logging

# Set up basic logging configuration
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)

def validate_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email)

def validate_mobile_number(mobile_number):
    pattern = r'^\d{10}$'  # Assuming a 10-digit mobile number
    return re.match(pattern, mobile_number)

# Step 2: API route for inserting data into users table
@app.route('/register', methods=['POST'])
def register_user():
    try:
        data = request.get_json()

        # Extracting the required fields
        first_name = data.get('first_name')
        middle_name = data.get('middle_name', None)
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirm_password')
        mobile_number = data.get('mobile_number')
        alt_mobile_number = data.get('alternate_mobile_number', None)
        flat_no = data.get('flat_no', None)
        full_address = data.get('full_address')
        area = data.get('area', None)
        landmark = data.get('landmark', None)
        city = data.get('city')
        state = data.get('state')
        pincode = data.get('pincode')
        anugrahit = data.get('anugrahit', 'no')
        gender = data.get('gender', 'male')

        # Step 3: Validation checks (optional)
        if password != confirm_password:
            return jsonify({"error": "Passwords do not match"}), 400

        if not validate_email(email):
            return jsonify({"error": "Invalid email format"}), 400

        if not validate_mobile_number(mobile_number):
            return jsonify({"error": "Invalid mobile number format"}), 400

        # Insert the user data into PostgreSQL
        conn = get_db_connection()
        cursor = conn.cursor()

        # Step 4: Insert query
        insert_query = """
        INSERT INTO users (
            first_name, middle_name, last_name, email, password, confirm_password,
            mobile_number, alternate_mobile_number, flat_no, full_address, area,
            landmark, city, state, pincode, anugrahit, gender
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        # Execute the query
        cursor.execute(insert_query, (
            first_name, middle_name, last_name, email, password, confirm_password, 
            mobile_number, alt_mobile_number, flat_no, full_address, area,
            landmark, city, state, pincode, anugrahit, gender
        ))

        conn.commit()  # Commit the transaction
        return jsonify({"message": "User registered successfully"}), 201

    except psycopg2.DatabaseError as db_err:
        logging.error(f"Database error: {str(db_err)}")
        return jsonify({"error": "Database error occurred"}), 500
    except KeyError as key_err:
        logging.error(f"Missing key: {str(key_err)}")
        return jsonify({"error": f"Missing field: {str(key_err)}"}), 400
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    finally:
        cursor.close()
        conn.close()

# Step 2: API route for fetching all users
@app.route('/users', methods=['GET'])
def get_all_users():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Step 3: Fetch all users from the users table
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()

        # Step 4: Convert the data into a list of dictionaries for better JSON readability
        user_list = []
        for user in users:
            user_data = {
                'id': user[0],
                'first_name': user[1],
                'middle_name': user[2],
                'last_name': user[3],
                'email': user[4],
                'mobile_number': user[7],
                'alternate_mobile_number': user[8],
                'flat_no': user[9],
                'full_address': user[10],
                'area': user[11],
                'landmark': user[12],
                'city': user[13],
                'state': user[14],
                'pincode': user[15],
                'anugrahit': user[16],
                'gender': user[17],
                'unique_family_code': user[18],
            }
            user_list.append(user_data)

        return jsonify(user_list), 200

    except psycopg2.DatabaseError as db_err:
        logging.error(f"Database error: {str(db_err)}")
        return jsonify({"error": "Database error occurred"}), 500
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    finally:
        cursor.close()
        conn.close()

# PUT Route to update a user's data
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        data = request.json  # Get JSON data from request body

        # List of fields that can be updated
        update_fields = ['first_name', 'middle_name', 'last_name', 'email', 'password', 'mobile_number', 'alternate_mobile_number', 
                         'flat_no', 'full_address', 'area', 'landmark', 'city', 'state', 'pincode', 'anugrahit', 'gender']

        # Only keep fields that are in update_fields and provided in the request
        updated_data = {key: data[key] for key in data if key in update_fields}

        if not updated_data:
            return jsonify({"error": "No valid fields to update"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        # Build the dynamic SQL update query
        set_clause = ', '.join([f"{key} = %s" for key in updated_data])
        values = list(updated_data.values())
        values.append(user_id)  # Add user_id to the values list

        update_query = f"UPDATE users SET {set_clause} WHERE id = %s"
        
        cursor.execute(update_query, values)
        conn.commit()

        return jsonify({"message": "User updated successfully"}), 200

    except psycopg2.DatabaseError as db_err:
        logging.error(f"Database error: {str(db_err)}")
        return jsonify({"error": "Database error occurred"}), 500
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    finally:
        cursor.close()
        conn.close()

# DELETE Route to delete a user by ID
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Execute the DELETE query
        cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
        conn.commit()

        if cursor.rowcount == 0:
            return jsonify({"error": "User not found"}), 404

        return jsonify({"message": "User deleted successfully"}), 200

    except psycopg2.DatabaseError as db_err:
        logging.error(f"Database error: {str(db_err)}")
        return jsonify({"error": "Database error occurred"}), 500
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    finally:
        cursor.close()
        conn.close()

# User login route
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        mobile_number = data.get('mobile_number')
        password = data.get('password')

        if not mobile_number or not password:
            return jsonify({"error": "Mobile number and password are required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        # Query the user by mobile_number
        cursor.execute("SELECT id, password FROM users WHERE mobile_number = %s", (mobile_number,))
        user = cursor.fetchone()

        if user:
            user_id, hashed_password = user

            # Verify the password
            if check_password_hash(hashed_password, password):
                return jsonify({"message": "Login successful", "user_id": user_id}), 200
            else:
                return jsonify({"error": "Invalid password"}), 401
        else:
            return jsonify({"error": "Mobile number not registered"}), 404

    except psycopg2.DatabaseError as db_err:
        logging.error(f"Database error: {str(db_err)}")
        return jsonify({"error": "Database error occurred"}), 500
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
