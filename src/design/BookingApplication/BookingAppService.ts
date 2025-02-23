import {
    Movie,
    Genre,
    MovieFormats,
    Theater,
    MovieEvent,
    SeatStatus,
    User,
    MovieBooking,
} from "./BookingAppModel";

export class UserService {
    private users: Map<string, User> = new Map();

    registerUser(user: User) {
        this.users.set(user.id, user);
    }

    authenticateUser(userId: string) {
        return this.users.has(userId);
    }
}

export class MovieService {
    private movies: Movie[] = [];

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    filterMovies(genre?: Genre, format?: MovieFormats): Movie[] {
        return this.movies.filter(
            (movie) =>
                (!genre || movie.genre.includes(genre)) &&
                (!format || movie.formats.includes(format))
        );
    }
}

export class TheaterService {
    private theaters: Theater[] = [];

    addTheater(theater: Theater) {
        this.theaters.push(theater);
    }

    findTheaterByLocation(location: string): Theater[] {
        return this.theaters.filter((theater) => theater.location === location);
    }
}

export class MovieEventService {
    private movieEvents: MovieEvent[] = [];

    addMovieEvent(event: MovieEvent) {
        this.movieEvents.push(event);
    }

    findEventsByLocation(location: string): MovieEvent[] {
        return this.movieEvents.filter(
            (event) => event.theaterScreen.id === location
        );
    }

    bookSeat(eventId: string, seatName: string): boolean {
        const event = this.movieEvents.find((e) => e.id === eventId);
        if (!event) return false;

        const seat = event.theaterScreen.seats[seatName];
        if (!seat || seat.status === SeatStatus.BOOKED) return false;

        seat.status = SeatStatus.BOOKED;
        event.bookedSeats.add(seatName);
        return true;
    }

    cancelSeat(eventId: string, seatName: string): boolean {
        const event = this.movieEvents.find((e) => e.id === eventId);
        if (!event) return false;

        const seat = event.theaterScreen.seats[seatName];
        if (!seat || seat.status === SeatStatus.AVAILABLE) return false;

        seat.status = SeatStatus.AVAILABLE;
        event.bookedSeats.delete(seatName);
        return true;
    }

    checkAvailability(eventId: string, seatNames: string[]): boolean {
        const event = this.movieEvents.find((e) => e.id === eventId);
        if (!event) return false;

        return !seatNames.some((seat) => event.bookedSeats.has(seat));
    }
}

export class MovieBookingService {
    private bookings: MovieBooking[] = [];
    private userService: UserService;
    private eventService: MovieEventService;

    constructor(userService: UserService, eventService: MovieEventService) {
        this.userService = userService;
        this.eventService = eventService;
    }

    bookTickets(userId: string, eventId: string, seatNames: string[]) {
        if (!this.userService.authenticateUser(userId)) return;
        if (!this.eventService.checkAvailability(eventId, seatNames)) return;

        const booking = new MovieBooking(
            crypto.randomUUID(),
            userId,
            eventId,
            seatNames
        );
        this.bookings.push(booking);
        return true;
    }
}
