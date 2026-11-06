# Data: MEPS public use files

Nothing in `data/raw/` is committed to git (see `.gitignore`).

## Source

Medical Expenditure Panel Survey (MEPS), Household Component, from the Agency for Healthcare Research and Quality (AHRQ).
These are public use files. AHRQ's data use conditions still apply; read them on the download page.

Download page: <https://meps.ahrq.gov/mepsweb/data_stats/download_data_files.jsp>

## What to download

TODO(Jorge): confirm the exact files for your chosen year(s) and condition. You will probably need:

1. **Full Year Consolidated Data File** for each year: demographics, insurance, expenditures, utilization, and the survey weights, strata and PSU variables.
2. **Medical Conditions File**: identifies people with condition X.
3. **Prescribed Medicines File**: identifies treatments A and B, if they are drugs.

For each file, download the data (ASCII or SAS transport, or Stata if `haven` is easier), plus the codebook.

## Steps

1. Download the files above into `data/raw/`.
2. Note the file names and year(s) here: TODO(Jorge).
3. MEPS is a complex survey. Use the person-level weight, strata and PSU variables for any population estimates. When pooling years, follow AHRQ's guidance for weights.
4. Read the files with `haven::read_dta()` / `read_xpt()` or AHRQ's R import script.

## Alternatives

CMS SynPUF (claims-like), SEER (survival analysis), MIMIC-IV (EHR; requires credentialing).
