export enum Genre {
    THRILLER = "THRILLER",
    ROMCOM = "ROMCOM",
    ACTION = "ACTION",
}

export enum MovieFormats {
    IMAX = "IMAX",
    THREE_D = "3D",
    TWO_D = "2D",
}

export enum SeatType {
    CLASSIC = "CLASSIC",
    VIP = "VIP",
}

export enum SeatStatus {
    AVAILABLE = "AVAILABLE",
    BOOKED = "BOOKED",
}

export class User {
    constructor(public id: string, public name: string) {}
}

export class Movie {
    constructor(
        public id: string,
        public title: string,
        public genre: Genre[],
        public formats: MovieFormats[],
        public language: string
    ) {}
}

export class TheaterSeat {
    constructor(
        public name: string,
        public seatType: SeatType,
        public price: number,
        public status: SeatStatus = SeatStatus.AVAILABLE
    ) {}
}

export class TheaterScreen {
    constructor(
        public id: string,
        public name: string,
        public seats: Record<string, TheaterSeat>
    ) {}
}

export class Theater {
    constructor(
        public id: string,
        public name: string,
        public location: string,
        public screens: TheaterScreen[]
    ) {}
}

export class MovieEvent {
    bookedSeats: Set<string> = new Set();

    constructor(
        public id: string,
        public movie: Movie,
        public theaterScreen: TheaterScreen,
        public eventDate: string,
        public startTime: string,
        public endTime: string
    ) {}
}

export class MovieBooking {
    constructor(
        public id: string,
        public userId: string,
        public eventId: string,
        public seats: string[]
    ) {}
}
