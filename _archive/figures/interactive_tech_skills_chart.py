import plotly.graph_objects as go

# Define skills and proficiency levels
skills = ["SQL", "R/RShiny", "Python/Streamlit", "Databricks", "Github", 
          "Teradata", "Tableau", "HTML, JS, CSS", "Figma", "AI/RAG"]
proficiency = [8, 9, 8, 7, 9, 7, 9, 6, 8, 7]  # Proficiency levels

# Close the radar chart loop
proficiency.append(proficiency[0])
skills.append(skills[0])

# Create radar chart
fig = go.Figure()

fig.add_trace(go.Scatterpolar(
    r=proficiency,
    theta=skills,
    fill='toself',
    name="Proficiency Level",
    hoverinfo="theta+r"
))

# Customize layout
fig.update_layout(
    polar=dict(radialaxis=dict(visible=True, range=[0, 10])),
    showlegend=True,
    title="Interactive Technical Skills Radar Chart"
)

# Save the chart as an HTML file
fig.write_html("interactive_skills_chart.html")
