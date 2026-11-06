# One-time setup. Run from this folder in R:  source("setup.R")
# TODO(Jorge): after the first run, commit renv.lock (this scaffold could not generate it).
if (!requireNamespace("renv", quietly = TRUE)) install.packages("renv")
renv::init(bare = TRUE)
renv::install(c(
  "dplyr", "survey", "MatchIt", "WeightIt", "cobalt", "gtsummary",
  "sandwich", "haven", "ggplot2", "quarto"
))
renv::snapshot()
