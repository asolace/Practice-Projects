class Timer
    attr_accessor :seconds

    def initialize
        @seconds = 0
    end

    def padded(time)
        time < 10 ? "0" + time.to_s : time.to_s
    end

    def get_seconds
        seconds = @seconds % 60
        padded(seconds)
    end

    def get_minutes
        minutes = ((@seconds - self.get_seconds.to_i) % 3600) / 60
        padded(minutes)
    end

    def get_hours
        hours = (@seconds - self.get_seconds.to_i - (self.get_minutes.to_i * 60)) / 3600
        padded(hours)
    end

    def time_string
        "#{self.get_hours}:#{self.get_minutes}:#{self.get_seconds}"
    end
end
