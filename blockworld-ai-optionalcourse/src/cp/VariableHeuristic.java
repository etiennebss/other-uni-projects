package cp;

import java.util.Map;
import java.util.Set;

import modelling.Variable;

public interface VariableHeuristic {
    Variable best(Set<Variable> variables, Map<Variable, Set<Object>> domains);
}
