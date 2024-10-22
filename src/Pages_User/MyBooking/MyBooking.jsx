import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const URL = `http://localhost:5000/api/v1/booking?email=${user.email}`;

            axios.get(URL, { withCredentials: true })
                .then((res) => setBookings(res.data))
                .catch((error) => {
                    console.error("Error fetching bookings:", error);
                    toast.error("Failed to fetch bookings.");
                });
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        const URL = `http://localhost:5000/api/v1/booking/${id}`;
        axios.delete(URL, { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    const remainItems = bookings.filter((booking) => booking._id !== id);
                    setBookings(remainItems);
                    toast.success("Booking deleted successfully!");
                }
            })
            .catch((error) => {
                console.error("Error deleting booking:", error);
                toast.error("Failed to delete booking.");
            });
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4 text-center">My Bookings</h1>
            <div className="table-responsive">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Ordered By</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Status</th>
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
                                        <span
                                            className={`badge ${booking.status === "Confirmed"
                                                ? "bg-success"
                                                : "bg-warning"
                                                }`}
                                        >
                                            {booking?.status || "Waiting"}
                                        </span>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => handleDelete(booking._id)}
                                            variant="danger"
                                            size="sm"
                                        >
                                            <FaTrash /> Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    No bookings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MyBooking;
