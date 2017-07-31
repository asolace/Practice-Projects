def rps(move)
  moves = ["rock", "paper", "scissors"]
  my_move = move.downcase
  comp_move = (0..2).to_a.sample
  comp_string = moves[comp_move].capitalize
  if my_move == (moves[comp_move - 1])
    return "#{comp_string}, Lose"
  elsif my_move == (moves[comp_move])
    return "#{comp_string}, Draw"
  else
    return "#{comp_string}, Win!"
  end
end

def remix(drinks)
  alcohols = drinks.map(&:first)
  sodas = drinks.map(&:last)
#  return alcohols.zip(sodas.rotate((1..(drinks.length - 1)).to_a.sample))
  sodas_picked = []
  final_mix = []
  alcohols.each_with_index do |alcohol, i|
    notme = (0..drinks.length).to_a.reject { |num| num == i }
    final_mix << [alcohols[i], sodas[notme.sample]]
  end
  final_mix.last.last.nil? ? remix(drinks) : final_mix
end

p remix([
  ["rum", "coke"],
  ["gin", "tonic"],
  ["scotch", "soda"],
  ["brandy", "7up"]
])
