import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table, Button, Container } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const URL = `http://localhost:5000/api/v1/booking?email=${user.email}`;
            fetch(URL)
                .then(res => res.json())
                .then((data) => setBookings(data))
                .catch(error => console.error('Error fetching bookings:', error));
        }
    }, [user?.email]);

    return (
        <Container className="mt-5">
            <h1 className="mb-4 text-center">My Bookings</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Ordered By</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.customer_name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.service_name}</td>
                                <td>${booking.service_price}</td>
                                <td>{new Date(booking.date).toLocaleDateString()}</td>
                                <td>
                                    <Button variant="warning" className="me-2" size="sm">
                                        <FaEdit /> Update
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        <FaTrash /> Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No bookings found.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyBooking;
